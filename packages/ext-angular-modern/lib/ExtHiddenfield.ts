//import EWCHiddenfield from '../dist/ext-hiddenfield.component.js';
//inputs: (new EWCHiddenfield()).properties,
//import EWCHiddenfield from '@sencha/ext-web-components-modern/dist/ext-hiddenfield.component.js';
import { EWCHiddenfield } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtHiddenfield',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoFitErrors','axisLock','bind','bodyAlign','border','bottom','bubbleDirty','centered','cls','constrainAlign','contentEl','controller','data','dataType','defaultListenerScope','dirty','disabled','displayed','docked','draggable','undefined','error','errorMessage','errorTarget','errorTip','errorTpl','undefined','undefined','flex','floated','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','inline','undefined','inputType','inputValue','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','label','labelAlign','labelCls','labelMinWidth','labelTextAlign','labelWidth','labelWrap','left','listeners','margin','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','padding','plugins','publishes','readOnly','record','reference','relative','renderTo','required','requiredMessage','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','sideError','stateful','statefulDefaults','stateId','style','tabIndex','tipError','titleError','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','underError','userCls','userSelectable','validateDisabled','validationMessage','validators','value','viewModel','weight','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','change','click','destroy','dirtychange','disabledchange','dockedchange','erased','errorchange','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','keyup','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','mousedown','moved','orientationchange','painted','paste','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtHiddenfieldComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtHiddenfieldComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoFitErrors','axisLock','bind','bodyAlign','border','bottom','bubbleDirty','centered','cls','constrainAlign','contentEl','controller','data','dataType','defaultListenerScope','dirty','disabled','displayed','docked','draggable','undefined','error','errorMessage','errorTarget','errorTip','errorTpl','undefined','undefined','flex','floated','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','inline','undefined','inputType','inputValue','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','label','labelAlign','labelCls','labelMinWidth','labelTextAlign','labelWidth','labelWrap','left','listeners','margin','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','padding','plugins','publishes','readOnly','record','reference','relative','renderTo','required','requiredMessage','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','sideError','stateful','statefulDefaults','stateId','style','tabIndex','tipError','titleError','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','underError','userCls','userSelectable','validateDisabled','validationMessage','validators','value','viewModel','weight','width','x','xtype','y','zIndex',],
            (new EWCHiddenfield()).events,
            ['ready','created','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','change','click','destroy','dirtychange','disabledchange','dockedchange','erased','errorchange','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','keyup','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','mousedown','moved','orientationchange','painted','paste','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'hiddenfield'
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

//var events = (new EWCHiddenfield()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
