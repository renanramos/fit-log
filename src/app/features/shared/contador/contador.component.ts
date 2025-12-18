import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AsyncPipe } from "@angular/common"
import { asyncScheduler, interval, map, observeOn, scan, startWith, Subject, switchMap, takeUntil } from "rxjs";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css'],
    imports: [AsyncPipe]
})
export class ContadorComponent {

    activateContador: boolean = false;
    currentTime: number = 0;
    private start$ = new Subject<void>();
    private stop$ = new Subject<void>();

    @Output() activateAccordions = new EventEmitter<boolean>();

    constructor(private cdr: ChangeDetectorRef) { }

    contador$ = this.start$.pipe(
        switchMap(() =>
            interval(1000).pipe(
                map(i => i + 1),
                takeUntil(this.stop$),
                observeOn(asyncScheduler)
            )
        )
    );

    tempoFormatado$ = this.contador$
        .pipe(map(() => {
            this.cdr.detectChanges();
            this.currentTime++
            this.formatarTempo(this.currentTime)
        }));

    iniciarContador() {
        this.activateContador = !this.activateContador;
        this.updateAccordionState();
        if (this.activateContador) {
            this.currentTime++;
            this.start$.next();
        } else {
            this.currentTime = 0;
            this.stop$.next();
        }
    }

    updateAccordionState() {
        this.activateAccordions.emit(this.activateContador);
    }

    formatarTempo(segundos: number): string {
        const horas = Math.floor(segundos / 3600);
        const minutos = Math.floor((segundos % 360) / 60);
        const segundosRestantes = segundos % 60;
        const horasStr = horas.toString().padStart(2, '0');
        const minutosStr = minutos.toString().padStart(2, '0');
        const segundosStr = segundosRestantes.toString().padStart(2, '0');

        return `${horasStr}:${minutosStr}:${segundosStr}`;
    }

}