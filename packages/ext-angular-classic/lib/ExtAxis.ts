//import EWCAxis from '../dist/ext-axis.component.js';
//inputs: (new EWCAxis()).properties,
//import EWCAxis from '@sencha/ext-web-components-classic/dist/ext-axis.component.js';
import { EWCAxis } from '@sencha/ext-web-components-classic';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './runtime/angularbase';

@Component({
    selector: 'ExtAxis',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','adjustByMajorUnit','background','center','chart','expandRangeBy','fields','floating','grid','hidden','id','label','layout','length','limits','linkedTo','listeners','majorTickSteps','margin','maximum','maxZoom','minimum','minorTickSteps','minZoom','needHighPrecision','position','radius','reconcileRange','renderer','rotation','segmenter','style','title','titleMargin','totalAngle','visibleRange',],
    outputs: ['ready','created','rangechange','visiblerangechange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtAxisComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtAxisComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','adjustByMajorUnit','background','center','chart','expandRangeBy','fields','floating','grid','hidden','id','label','layout','length','limits','linkedTo','listeners','majorTickSteps','margin','maximum','maxZoom','minimum','minorTickSteps','minZoom','needHighPrecision','position','radius','reconcileRange','renderer','rotation','segmenter','style','title','titleMargin','totalAngle','visibleRange',],
            (new EWCAxis()).events,
            ['ready','created','rangechange','visiblerangechange',],
            vc
        )
        this.xtype = 'axis'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCAxis()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
