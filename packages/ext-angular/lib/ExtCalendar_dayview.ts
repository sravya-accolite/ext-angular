//import EWCCalendar_dayview from '../dist/ext-calendar-dayview.component.js';
//inputs: (new EWCCalendar_dayview()).properties,
import EWCCalendar_dayview from '@sencha/ext-web-components/dist/ext-calendar-dayview.component.js';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './angularbase';

@Component({
    selector: 'ExtCalendar_dayview',
    inputs: ['label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','addForm','alignSelf','allowSelection','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','cls','compact','compactOptions','constrainAlign','contentEl','controller','controlStoreRange','data','defaultListenerScope','disabled','displayed','displayOverlap','docked','draggable','droppable','editForm','endTime','undefined','eventDefaults','undefined','undefined','flex','floated','focusCls','fullscreen','gestureNavigation','header','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','listeners','margin','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','padding','plugins','publishes','record','reference','relative','renderTo','resizeEvents','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','showNowMarker','startTime','stateful','statefulDefaults','stateId','store','style','tabIndex','timeFormat','timeRenderer','timezoneOffset','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','value','viewModel','visibleDays','weight','width','x','xtype','y','zIndex',],
    outputs: ['ready','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeeventadd','beforeeventdragstart','beforeeventedit','beforeeventresizestart','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','eventadd','eventdrop','eventedit','eventresize','eventtap','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','validateeventadd','validateeventdrop','validateeventedit','validateeventresize','valuechange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_dayviewComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCalendar_dayviewComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','addForm','alignSelf','allowSelection','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','cls','compact','compactOptions','constrainAlign','contentEl','controller','controlStoreRange','data','defaultListenerScope','disabled','displayed','displayOverlap','docked','draggable','droppable','editForm','endTime','undefined','eventDefaults','undefined','undefined','flex','floated','focusCls','fullscreen','gestureNavigation','header','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','listeners','margin','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','padding','plugins','publishes','record','reference','relative','renderTo','resizeEvents','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','showNowMarker','startTime','stateful','statefulDefaults','stateId','store','style','tabIndex','timeFormat','timeRenderer','timezoneOffset','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','value','viewModel','visibleDays','weight','width','x','xtype','y','zIndex',],
            (new EWCCalendar_dayview()).events,
            ['ready','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeeventadd','beforeeventdragstart','beforeeventedit','beforeeventresizestart','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','eventadd','eventdrop','eventedit','eventresize','eventtap','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','validateeventadd','validateeventdrop','validateeventedit','validateeventresize','valuechange','widthchange',],
            vc
        )
        this.xtype = 'calendar-dayview'
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

//var events = (new EWCCalendar_dayview()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
