import { OnInit, AfterViewInit, OnChanges, ElementRef, SimpleChanges } from '@angular/core';
import { EngBase } from './eng-base';
export declare class calendar_dayviewMetaData {
    static XTYPE: string;
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
}
export declare class ExtCalendar_dayviewComponent extends EngBase implements OnInit, AfterViewInit, OnChanges {
    hostComponent: EngBase;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
