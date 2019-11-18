//import EWCCombobox from '../dist/ext-combobox.component.js';
//inputs: (new EWCCombobox()).properties,
import EWCCombobox from '@sencha/ext-web-components/dist/ext-combobox.component.js';
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
    selector: 'ExtCombobox',
    inputs: ['label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alignTarget','allQuery','alwaysOnTop','animateUnderline','anyMatch','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoCapitalize','autoComplete','autoCorrect','autoFitErrors','autoFocus','autoFocusLast','autoHideInputMask','autoLoadOnValue','autoSelect','axisLock','badFormatMessage','bind','bodyAlign','border','bottom','bubbleDirty','caseSensitive','centered','chipView','clearable','cls','collapseOnSelect','constrainAlign','contentEl','controller','data','dataType','defaultListenerScope','delimiter','dirty','disabled','displayed','displayField','displayTpl','docked','draggable','edgePicker','editable','enableRegEx','undefined','error','errorMessage','errorTarget','errorTip','errorTpl','undefined','undefined','flex','floated','floatedPicker','floatedPickerAlign','focusCls','focusTrap','forceSelection','fullscreen','height','hidden','hiddenName','hideAnimation','hideMode','hideOnMaskTap','hideTrigger','html','id','inline','undefined','inputMask','inputType','inputValue','instanceCls','itemCls','itemId','itemTpl','keyMap','keyMapEnabled','keyMapTarget','label','labelAlign','labelCls','labelInPlaceholder','labelMinWidth','labelTextAlign','labelWidth','labelWrap','left','listeners','margin','matchFieldWidth','maxHeight','maxLength','maxWidth','minChars','minHeight','minWidth','modal','modelValidation','multiSelect','name','nameable','options','padding','parseValidator','pattern','picker','pickerSlotAlign','placeholder','undefined','plugins','primaryFilter','publishes','queryCaching','queryDelay','queryMode','queryParam','readOnly','record','recordCreator','recordCreatorScope','reference','relative','renderTo','required','requiredMessage','right','ripple','scrollable','selection','selectOnTab','session','shadow','shareableName','shim','showAnimation','sideError','stateful','statefulDefaults','stateId','store','stripCharsRe','style','tabIndex','textAlign','tipError','titleError','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','triggerAction','triggers','twoWayBindable','typeAhead','typeAheadDelay','ui','underError','userCls','userSelectable','validateDisabled','validationMessage','validators','value','valueCollection','valueField','valueNotFoundText','viewModel','weight','width','x','xtype','y','zIndex',],
    outputs: ['ready','action','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforepickercreate','beforequery','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','change','clearicontap','click','collapse','destroy','dirtychange','disabledchange','dockedchange','erased','errorchange','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','keydown','keyup','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','mousedown','moved','orientationchange','painted','paste','pickercreate','positionedchange','removed','resize','rightchange','scrollablechange','select','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtComboboxComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtComboboxComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alignTarget','allQuery','alwaysOnTop','animateUnderline','anyMatch','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoCapitalize','autoComplete','autoCorrect','autoFitErrors','autoFocus','autoFocusLast','autoHideInputMask','autoLoadOnValue','autoSelect','axisLock','badFormatMessage','bind','bodyAlign','border','bottom','bubbleDirty','caseSensitive','centered','chipView','clearable','cls','collapseOnSelect','constrainAlign','contentEl','controller','data','dataType','defaultListenerScope','delimiter','dirty','disabled','displayed','displayField','displayTpl','docked','draggable','edgePicker','editable','enableRegEx','undefined','error','errorMessage','errorTarget','errorTip','errorTpl','undefined','undefined','flex','floated','floatedPicker','floatedPickerAlign','focusCls','focusTrap','forceSelection','fullscreen','height','hidden','hiddenName','hideAnimation','hideMode','hideOnMaskTap','hideTrigger','html','id','inline','undefined','inputMask','inputType','inputValue','instanceCls','itemCls','itemId','itemTpl','keyMap','keyMapEnabled','keyMapTarget','label','labelAlign','labelCls','labelInPlaceholder','labelMinWidth','labelTextAlign','labelWidth','labelWrap','left','listeners','margin','matchFieldWidth','maxHeight','maxLength','maxWidth','minChars','minHeight','minWidth','modal','modelValidation','multiSelect','name','nameable','options','padding','parseValidator','pattern','picker','pickerSlotAlign','placeholder','undefined','plugins','primaryFilter','publishes','queryCaching','queryDelay','queryMode','queryParam','readOnly','record','recordCreator','recordCreatorScope','reference','relative','renderTo','required','requiredMessage','right','ripple','scrollable','selection','selectOnTab','session','shadow','shareableName','shim','showAnimation','sideError','stateful','statefulDefaults','stateId','store','stripCharsRe','style','tabIndex','textAlign','tipError','titleError','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','triggerAction','triggers','twoWayBindable','typeAhead','typeAheadDelay','ui','underError','userCls','userSelectable','validateDisabled','validationMessage','validators','value','valueCollection','valueField','valueNotFoundText','viewModel','weight','width','x','xtype','y','zIndex',],
            (new EWCCombobox()).events,
            ['ready','action','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforepickercreate','beforequery','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','change','clearicontap','click','collapse','destroy','dirtychange','disabledchange','dockedchange','erased','errorchange','expand','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','keydown','keyup','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','mousedown','moved','orientationchange','painted','paste','pickercreate','positionedchange','removed','resize','rightchange','scrollablechange','select','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'combobox'
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

//var events = (new EWCCombobox()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
