//import EWCMonthpicker from '../dist/ext-monthpicker.component.js';
//inputs: (new EWCMonthpicker()).properties,
//import EWCMonthpicker from '@sencha/ext-web-components-classic/dist/ext-monthpicker.component.js';
import { EWCMonthpicker } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtMonthpicker',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','alignOnScroll','alignTarget','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoEl','autoRender','undefined','autoShow','baseCls','bind','border','cancelText','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','disabled','disabledCls','dock','draggable','fixed','flex','floating','focusCls','focusOnToFront','footerButtonUI','formBind','frame','height','hidden','hideMode','html','id','itemId','keyMap','keyMapEnabled','keyMapTarget','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','nameable','okText','overCls','undefined','undefined','padding','plugins','publishes','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','showButtons','shrinkWrap','stateEvents','stateful','stateId','style','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','value','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','cancelclick','deactivate','destroy','disable','enable','focus','focusenter','focusleave','hide','monthclick','monthdblclick','move','okclick','removed','render','resize','select','show','staterestore','statesave','yearclick','yeardblclick',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMonthpickerComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtMonthpickerComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','alignOnScroll','alignTarget','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoEl','autoRender','undefined','autoShow','baseCls','bind','border','cancelText','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','disabled','disabledCls','dock','draggable','fixed','flex','floating','focusCls','focusOnToFront','footerButtonUI','formBind','frame','height','hidden','hideMode','html','id','itemId','keyMap','keyMapEnabled','keyMapTarget','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','nameable','okText','overCls','undefined','undefined','padding','plugins','publishes','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','showButtons','shrinkWrap','stateEvents','stateful','stateId','style','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','value','viewModel','weight','width','xtype',],
            (new EWCMonthpicker()).events,
            ['ready','created','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','cancelclick','deactivate','destroy','disable','enable','focus','focusenter','focusleave','hide','monthclick','monthdblclick','move','okclick','removed','render','resize','select','show','staterestore','statesave','yearclick','yeardblclick',],
            vc
        )
        this.xtype = 'monthpicker'
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

//var events = (new EWCMonthpicker()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
