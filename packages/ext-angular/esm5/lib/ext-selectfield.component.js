import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var selectfieldMetaData = /** @class */ (function () {
    function selectfieldMetaData() {
    }
    selectfieldMetaData.XTYPE = 'selectfield';
    selectfieldMetaData.PROPERTIES = [
        'alignSelf',
        'alignTarget',
        'alwaysOnTop',
        'animateUnderline',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'autoCapitalize',
        'autoComplete',
        'autoCorrect',
        'autoFitErrors',
        'autoFocus',
        'autoFocusLast',
        'autoHideInputMask',
        'autoLoadOnValue',
        'autoSelect',
        'axisLock',
        'badFormatMessage',
        'bind',
        'bodyAlign',
        'border',
        'bottom',
        'bubbleDirty',
        'centered',
        'chipView',
        'clearable',
        'cls',
        'collapseOnSelect',
        'constrainAlign',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
        'delimiter',
        'dirty',
        'disabled',
        'displayed',
        'displayField',
        'displayTpl',
        'docked',
        'draggable',
        'edgePicker',
        'editable',
        'error',
        'errorMessage',
        'errorTarget',
        'errorTip',
        'errorTpl',
        'flex',
        'floated',
        'floatedPicker',
        'floatedPickerAlign',
        'focusCls',
        'focusTrap',
        'forceSelection',
        'fullscreen',
        'height',
        'hidden',
        'hiddenName',
        'hideAnimation',
        'hideMode',
        'hideOnMaskTap',
        'hideTrigger',
        'html',
        'id',
        'inline',
        'inputMask',
        'inputType',
        'inputValue',
        'instanceCls',
        'itemCls',
        'itemId',
        'itemTpl',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'label',
        'labelAlign',
        'labelCls',
        'labelInPlaceholder',
        'labelMinWidth',
        'labelTextAlign',
        'labelWidth',
        'labelWrap',
        'left',
        'listeners',
        'margin',
        'matchFieldWidth',
        'maxHeight',
        'maxLength',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'multiSelect',
        'name',
        'nameable',
        'options',
        'padding',
        'parseValidator',
        'pattern',
        'picker',
        'pickerSlotAlign',
        'placeholder',
        'plugins',
        'publishes',
        'readOnly',
        'record',
        'recordCreator',
        'recordCreatorScope',
        'reference',
        'relative',
        'renderTo',
        'required',
        'requiredMessage',
        'right',
        'ripple',
        'scrollable',
        'selection',
        'selectOnTab',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'showAnimation',
        'sideError',
        'stateful',
        'statefulDefaults',
        'stateId',
        'store',
        'stripCharsRe',
        'style',
        'tabIndex',
        'textAlign',
        'tipError',
        'titleError',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'triggers',
        'twoWayBindable',
        'ui',
        'underError',
        'userCls',
        'userSelectable',
        'validateDisabled',
        'validationMessage',
        'validators',
        'value',
        'valueCollection',
        'valueField',
        'valueNotFoundText',
        'viewModel',
        'weight',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'align',
        'fitToParent',
        'config'
    ];
    selectfieldMetaData.EVENTS = [
        { name: 'action', parameters: 'selectfield,e' },
        { name: 'added', parameters: 'sender,container,index' },
        { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehide', parameters: 'sender' },
        { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeshow', parameters: 'sender' },
        { name: 'beforetofront', parameters: 'selectfield' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'selectfield,e' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'change', parameters: 'selectfield,newValue,oldValue' },
        { name: 'clearicontap', parameters: 'selectfield,input,e' },
        { name: 'click', parameters: 'e' },
        { name: 'collapse', parameters: 'field' },
        { name: 'destroy', parameters: '' },
        { name: 'dirtychange', parameters: 'selectfield,dirty' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'errorchange', parameters: 'selectfield,error' },
        { name: 'expand', parameters: 'field' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'selectfield,e' },
        { name: 'focusenter', parameters: 'selectfield,event' },
        { name: 'focusleave', parameters: 'selectfield,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'keydown', parameters: 'selectfield,e' },
        { name: 'keyup', parameters: 'selectfield,e' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'mousedown', parameters: 'selectfield,e' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'paste', parameters: 'selectfield,e' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'select', parameters: 'selectfield,newValue' },
        { name: 'show', parameters: 'sender' },
        { name: 'tofront', parameters: 'selectfield' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    selectfieldMetaData.EVENTNAMES = [
        'action',
        'added',
        'beforebottomchange',
        'beforecenteredchange',
        'beforedisabledchange',
        'beforedockedchange',
        'beforeheightchange',
        'beforehiddenchange',
        'beforehide',
        'beforeleftchange',
        'beforemaxHeightchange',
        'beforemaxWidthchange',
        'beforeminHeightchange',
        'beforeminWidthchange',
        'beforeorientationchange',
        'beforerightchange',
        'beforescrollablechange',
        'beforeshow',
        'beforetofront',
        'beforetopchange',
        'beforewidthchange',
        'blur',
        'bottomchange',
        'centeredchange',
        'change',
        'clearicontap',
        'click',
        'collapse',
        'destroy',
        'dirtychange',
        'disabledchange',
        'dockedchange',
        'erased',
        'errorchange',
        'expand',
        'floatingchange',
        'focus',
        'focusenter',
        'focusleave',
        'fullscreen',
        'heightchange',
        'hiddenchange',
        'hide',
        'initialize',
        'keydown',
        'keyup',
        'leftchange',
        'maxHeightchange',
        'maxWidthchange',
        'minHeightchange',
        'minWidthchange',
        'mousedown',
        'moved',
        'orientationchange',
        'painted',
        'paste',
        'positionedchange',
        'removed',
        'resize',
        'rightchange',
        'scrollablechange',
        'select',
        'show',
        'tofront',
        'topchange',
        'updatedata',
        'widthchange',
        'ready'
    ];
    return selectfieldMetaData;
}());
export { selectfieldMetaData };
var ExtSelectfieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSelectfieldComponent, _super);
    function ExtSelectfieldComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, selectfieldMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtSelectfieldComponent_1 = ExtSelectfieldComponent;
    ExtSelectfieldComponent.prototype.ngOnInit = function () {
        this.baseOnInit(selectfieldMetaData);
    };
    ExtSelectfieldComponent.prototype.ngAfterContentInit = function () {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    };
    var ExtSelectfieldComponent_1;
    ExtSelectfieldComponent = ExtSelectfieldComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'selectfield',
            inputs: selectfieldMetaData.PROPERTIES,
            outputs: selectfieldMetaData.EVENTNAMES,
            providers: [{ provide: base, useExisting: forwardRef(function () { return ExtSelectfieldComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, base])
    ], ExtSelectfieldComponent);
    return ExtSelectfieldComponent;
}(base));
export { ExtSelectfieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNlbGVjdGZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LXNlbGVjdGZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQTBUQSxDQUFDO0lBelRlLHlCQUFLLEdBQVcsYUFBYSxDQUFDO0lBQzlCLDhCQUFVLEdBQWE7UUFDbkMsV0FBVztRQUNYLGFBQWE7UUFDYixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGFBQWE7UUFDYixlQUFlO1FBQ2YsV0FBVztRQUNYLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixXQUFXO1FBQ1gsUUFBUTtRQUNSLFFBQVE7UUFDUixhQUFhO1FBQ2IsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsS0FBSztRQUNMLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFlBQVk7UUFDWixNQUFNO1FBQ04sc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxPQUFPO1FBQ1AsVUFBVTtRQUNWLFdBQVc7UUFDWCxjQUFjO1FBQ2QsWUFBWTtRQUNaLFFBQVE7UUFDUixXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7UUFDVixPQUFPO1FBQ1AsY0FBYztRQUNkLGFBQWE7UUFDYixVQUFVO1FBQ1YsVUFBVTtRQUNWLE1BQU07UUFDTixTQUFTO1FBQ1QsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixVQUFVO1FBQ1YsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osUUFBUTtRQUNSLFFBQVE7UUFDUixZQUFZO1FBQ1osZUFBZTtRQUNmLFVBQVU7UUFDVixlQUFlO1FBQ2YsYUFBYTtRQUNiLE1BQU07UUFDTixJQUFJO1FBQ0osUUFBUTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixTQUFTO1FBQ1QsUUFBUTtRQUNSLFNBQVM7UUFDVCxRQUFRO1FBQ1IsZUFBZTtRQUNmLGNBQWM7UUFDZCxPQUFPO1FBQ1AsWUFBWTtRQUNaLFVBQVU7UUFDVixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osV0FBVztRQUNYLE1BQU07UUFDTixXQUFXO1FBQ1gsUUFBUTtRQUNSLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsV0FBVztRQUNYLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLE9BQU87UUFDUCxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLE1BQU07UUFDTixVQUFVO1FBQ1YsU0FBUztRQUNULFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsU0FBUztRQUNULFFBQVE7UUFDUixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLFNBQVM7UUFDVCxXQUFXO1FBQ1gsVUFBVTtRQUNWLFFBQVE7UUFDUixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsT0FBTztRQUNQLFFBQVE7UUFDUixZQUFZO1FBQ1osV0FBVztRQUNYLGFBQWE7UUFDYixTQUFTO1FBQ1QsUUFBUTtRQUNSLGVBQWU7UUFDZixNQUFNO1FBQ04sZUFBZTtRQUNmLFdBQVc7UUFDWCxVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxPQUFPO1FBQ1AsY0FBYztRQUNkLE9BQU87UUFDUCxVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixZQUFZO1FBQ1osZUFBZTtRQUNmLFNBQVM7UUFDVCxLQUFLO1FBQ0wsYUFBYTtRQUNiLEtBQUs7UUFDTCxjQUFjO1FBQ2QsY0FBYztRQUNkLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsSUFBSTtRQUNKLFlBQVk7UUFDWixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLE9BQU87UUFDUCxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsUUFBUTtRQUNSLE9BQU87UUFDUCxHQUFHO1FBQ0gsT0FBTztRQUNQLEdBQUc7UUFDSCxRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsYUFBYTtRQUNiLFFBQVE7S0FDWCxDQUFDO0lBQ2MsMEJBQU0sR0FBVTtRQUNoQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQztRQUMxQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLHdCQUF3QixFQUFDO1FBQ2xELEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN4RSxFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDMUUsRUFBQyxJQUFJLEVBQUMsc0JBQXNCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQzFFLEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN4RSxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDeEUsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3hFLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO1FBQ3ZDLEVBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN0RSxFQUFDLElBQUksRUFBQyx1QkFBdUIsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDM0UsRUFBQyxJQUFJLEVBQUMsc0JBQXNCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQzFFLEVBQUMsSUFBSSxFQUFDLHVCQUF1QixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUMzRSxFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDMUUsRUFBQyxJQUFJLEVBQUMseUJBQXlCLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztRQUM5QyxFQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDdkUsRUFBQyxJQUFJLEVBQUMsd0JBQXdCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQzVFLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO1FBQ3ZDLEVBQUMsSUFBSSxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDO1FBQy9DLEVBQUMsSUFBSSxFQUFDLGlCQUFpQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUNyRSxFQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDdkUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUM7UUFDeEMsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUN4RCxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDMUQsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQywrQkFBK0IsRUFBQztRQUMxRCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDO1FBQ3RELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsR0FBRyxFQUFDO1FBQzdCLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDO1FBQ3BDLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO1FBQzlCLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsbUJBQW1CLEVBQUM7UUFDbkQsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQzFELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDeEQsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUM7UUFDbkMsRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQztRQUNuRCxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQztRQUNsQyxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsbUJBQW1CLEVBQUM7UUFDdEQsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUM7UUFDekMsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQztRQUNsRCxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLG1CQUFtQixFQUFDO1FBQ2xELEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO1FBQ3ZDLEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDeEQsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUN4RCxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQztRQUNqQyxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQztRQUN2QyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQztRQUMzQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQztRQUN6QyxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3RELEVBQUMsSUFBSSxFQUFDLGlCQUFpQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUMzRCxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDMUQsRUFBQyxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQzNELEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUMxRCxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQztRQUM3QyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLG9DQUFvQyxFQUFDO1FBQzlELEVBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7UUFDeEMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQztRQUM1QyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQztRQUN6QyxFQUFDLElBQUksRUFBQyxrQkFBa0IsRUFBQyxVQUFVLEVBQUMsbUJBQW1CLEVBQUM7UUFDeEQsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyx3QkFBd0IsRUFBQztRQUNwRCxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQztRQUN6QyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3ZELEVBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUM1RCxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLHNCQUFzQixFQUFDO1FBQ2pELEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO1FBQ2pDLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDO1FBQ3pDLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDckQsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQztRQUMvQyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3ZELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzNCLENBQUM7SUFDYyw4QkFBVSxHQUFhO1FBQ3ZDLFFBQVE7UUFDUixPQUFPO1FBQ1Asb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQix3QkFBd0I7UUFDeEIsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLE1BQU07UUFDTixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLFFBQVE7UUFDUixjQUFjO1FBQ2QsT0FBTztRQUNQLFVBQVU7UUFDVixTQUFTO1FBQ1QsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsUUFBUTtRQUNSLGFBQWE7UUFDYixRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLE9BQU87UUFDUCxZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztRQUNkLE1BQU07UUFDTixZQUFZO1FBQ1osU0FBUztRQUNULE9BQU87UUFDUCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxPQUFPO1FBQ1AsbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxPQUFPO1FBQ1Asa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxRQUFRO1FBQ1IsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsTUFBTTtRQUNOLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixPQUFPO0tBQ04sQ0FBQztJQUNGLDBCQUFDO0NBQUEsQUExVEQsSUEwVEM7U0ExVFksbUJBQW1CO0FBa1VoQztJQUE2QyxtREFBSTtJQUMvQyxpQ0FDRSxJQUFlLEVBQXlDLGFBQW9CO1FBRDlFLFlBRUksa0JBQU0sSUFBSSxDQUFDLGFBQWEsRUFBQyxtQkFBbUIsRUFBQyxhQUFhLENBQUMsU0FDNUQ7UUFGdUQsbUJBQWEsR0FBYixhQUFhLENBQU87O0lBRTVFLENBQUM7Z0NBSlEsdUJBQXVCO0lBSzNCLDBDQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNNLG9EQUFrQixHQUF6QjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLDBCQUEwQjtJQUM1QixDQUFDOztJQVhVLHVCQUF1QjtRQVBuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixNQUFNLEVBQUUsbUJBQW1CLENBQUMsVUFBVTtZQUN0QyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsVUFBVTtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEseUJBQXVCLEVBQXZCLENBQXVCLENBQUMsRUFBQyxDQUFDO1lBQ3BGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUdvQixtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBQTNDLFVBQVUsRUFBeUQsSUFBSTtPQUZuRSx1QkFBdUIsQ0FjbkM7SUFBRCw4QkFBQztDQUFBLEFBZEQsQ0FBNkMsSUFBSSxHQWNoRDtTQWRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3Mgc2VsZWN0ZmllbGRNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdzZWxlY3RmaWVsZCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FsaWduU2VsZicsXG4gICAgJ2FsaWduVGFyZ2V0JyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhbmltYXRlVW5kZXJsaW5lJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F1dG9DYXBpdGFsaXplJyxcbiAgICAnYXV0b0NvbXBsZXRlJyxcbiAgICAnYXV0b0NvcnJlY3QnLFxuICAgICdhdXRvRml0RXJyb3JzJyxcbiAgICAnYXV0b0ZvY3VzJyxcbiAgICAnYXV0b0ZvY3VzTGFzdCcsXG4gICAgJ2F1dG9IaWRlSW5wdXRNYXNrJyxcbiAgICAnYXV0b0xvYWRPblZhbHVlJyxcbiAgICAnYXV0b1NlbGVjdCcsXG4gICAgJ2F4aXNMb2NrJyxcbiAgICAnYmFkRm9ybWF0TWVzc2FnZScsXG4gICAgJ2JpbmQnLFxuICAgICdib2R5QWxpZ24nLFxuICAgICdib3JkZXInLFxuICAgICdib3R0b20nLFxuICAgICdidWJibGVEaXJ0eScsXG4gICAgJ2NlbnRlcmVkJyxcbiAgICAnY2hpcFZpZXcnLFxuICAgICdjbGVhcmFibGUnLFxuICAgICdjbHMnLFxuICAgICdjb2xsYXBzZU9uU2VsZWN0JyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGVsaW1pdGVyJyxcbiAgICAnZGlydHknLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2Rpc3BsYXlGaWVsZCcsXG4gICAgJ2Rpc3BsYXlUcGwnLFxuICAgICdkb2NrZWQnLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdlZGdlUGlja2VyJyxcbiAgICAnZWRpdGFibGUnLFxuICAgICdlcnJvcicsXG4gICAgJ2Vycm9yTWVzc2FnZScsXG4gICAgJ2Vycm9yVGFyZ2V0JyxcbiAgICAnZXJyb3JUaXAnLFxuICAgICdlcnJvclRwbCcsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGVkJyxcbiAgICAnZmxvYXRlZFBpY2tlcicsXG4gICAgJ2Zsb2F0ZWRQaWNrZXJBbGlnbicsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZm9jdXNUcmFwJyxcbiAgICAnZm9yY2VTZWxlY3Rpb24nLFxuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZGVuTmFtZScsXG4gICAgJ2hpZGVBbmltYXRpb24nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2hpZGVPbk1hc2tUYXAnLFxuICAgICdoaWRlVHJpZ2dlcicsXG4gICAgJ2h0bWwnLFxuICAgICdpZCcsXG4gICAgJ2lubGluZScsXG4gICAgJ2lucHV0TWFzaycsXG4gICAgJ2lucHV0VHlwZScsXG4gICAgJ2lucHV0VmFsdWUnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2l0ZW1DbHMnLFxuICAgICdpdGVtSWQnLFxuICAgICdpdGVtVHBsJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xhYmVsJyxcbiAgICAnbGFiZWxBbGlnbicsXG4gICAgJ2xhYmVsQ2xzJyxcbiAgICAnbGFiZWxJblBsYWNlaG9sZGVyJyxcbiAgICAnbGFiZWxNaW5XaWR0aCcsXG4gICAgJ2xhYmVsVGV4dEFsaWduJyxcbiAgICAnbGFiZWxXaWR0aCcsXG4gICAgJ2xhYmVsV3JhcCcsXG4gICAgJ2xlZnQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXRjaEZpZWxkV2lkdGgnLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhMZW5ndGgnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICdtdWx0aVNlbGVjdCcsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ29wdGlvbnMnLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGFyc2VWYWxpZGF0b3InLFxuICAgICdwYXR0ZXJuJyxcbiAgICAncGlja2VyJyxcbiAgICAncGlja2VyU2xvdEFsaWduJyxcbiAgICAncGxhY2Vob2xkZXInLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVhZE9ubHknLFxuICAgICdyZWNvcmQnLFxuICAgICdyZWNvcmRDcmVhdG9yJyxcbiAgICAncmVjb3JkQ3JlYXRvclNjb3BlJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVsYXRpdmUnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JlcXVpcmVkJyxcbiAgICAncmVxdWlyZWRNZXNzYWdlJyxcbiAgICAncmlnaHQnLFxuICAgICdyaXBwbGUnLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2VsZWN0aW9uJyxcbiAgICAnc2VsZWN0T25UYWInLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaG93QW5pbWF0aW9uJyxcbiAgICAnc2lkZUVycm9yJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZWZ1bERlZmF1bHRzJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0b3JlJyxcbiAgICAnc3RyaXBDaGFyc1JlJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RleHRBbGlnbicsXG4gICAgJ3RpcEVycm9yJyxcbiAgICAndGl0bGVFcnJvcicsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sdGlwJyxcbiAgICAndG9wJyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cGwnLFxuICAgICd0cGxXcml0ZU1vZGUnLFxuICAgICd0cmFuc2xhdGFibGUnLFxuICAgICd0cmlnZ2VycycsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1bmRlckVycm9yJyxcbiAgICAndXNlckNscycsXG4gICAgJ3VzZXJTZWxlY3RhYmxlJyxcbiAgICAndmFsaWRhdGVEaXNhYmxlZCcsXG4gICAgJ3ZhbGlkYXRpb25NZXNzYWdlJyxcbiAgICAndmFsaWRhdG9ycycsXG4gICAgJ3ZhbHVlJyxcbiAgICAndmFsdWVDb2xsZWN0aW9uJyxcbiAgICAndmFsdWVGaWVsZCcsXG4gICAgJ3ZhbHVlTm90Rm91bmRUZXh0JyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnd2lkdGgnLFxuICAgICd4JyxcbiAgICAneHR5cGUnLFxuICAgICd5JyxcbiAgICAnekluZGV4JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidhY3Rpb24nLHBhcmFtZXRlcnM6J3NlbGVjdGZpZWxkLGUnfSxcbntuYW1lOidhZGRlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxue25hbWU6J2JlZm9yZWJvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidiZWZvcmVsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidiZWZvcmVyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidiZWZvcmV0b2Zyb250JyxwYXJhbWV0ZXJzOidzZWxlY3RmaWVsZCd9LFxue25hbWU6J2JlZm9yZXRvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmx1cicscGFyYW1ldGVyczonc2VsZWN0ZmllbGQsZSd9LFxue25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2NoYW5nZScscGFyYW1ldGVyczonc2VsZWN0ZmllbGQsbmV3VmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidjbGVhcmljb250YXAnLHBhcmFtZXRlcnM6J3NlbGVjdGZpZWxkLGlucHV0LGUnfSxcbntuYW1lOidjbGljaycscGFyYW1ldGVyczonZSd9LFxue25hbWU6J2NvbGxhcHNlJyxwYXJhbWV0ZXJzOidmaWVsZCd9LFxue25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2RpcnR5Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZWxlY3RmaWVsZCxkaXJ0eSd9LFxue25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2VyYXNlZCcscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonZXJyb3JjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbGVjdGZpZWxkLGVycm9yJ30sXG57bmFtZTonZXhwYW5kJyxwYXJhbWV0ZXJzOidmaWVsZCd9LFxue25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxue25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidzZWxlY3RmaWVsZCxlJ30sXG57bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonc2VsZWN0ZmllbGQsZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidzZWxlY3RmaWVsZCxldmVudCd9LFxue25hbWU6J2Z1bGxzY3JlZW4nLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidrZXlkb3duJyxwYXJhbWV0ZXJzOidzZWxlY3RmaWVsZCxlJ30sXG57bmFtZTona2V5dXAnLHBhcmFtZXRlcnM6J3NlbGVjdGZpZWxkLGUnfSxcbntuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtb3VzZWRvd24nLHBhcmFtZXRlcnM6J3NlbGVjdGZpZWxkLGUnfSxcbntuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxue25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxue25hbWU6J3Bhc3RlJyxwYXJhbWV0ZXJzOidzZWxlY3RmaWVsZCxlJ30sXG57bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcbntuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG57bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcbntuYW1lOidyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonc2VsZWN0JyxwYXJhbWV0ZXJzOidzZWxlY3RmaWVsZCxuZXdWYWx1ZSd9LFxue25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J3NlbGVjdGZpZWxkJ30sXG57bmFtZTondG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOid1cGRhdGVkYXRhJyxwYXJhbWV0ZXJzOidzZW5kZXIsbmV3RGF0YSd9LFxue25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG4nYWN0aW9uJyxcbidhZGRlZCcsXG4nYmVmb3JlYm90dG9tY2hhbmdlJyxcbidiZWZvcmVjZW50ZXJlZGNoYW5nZScsXG4nYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuJ2JlZm9yZWRvY2tlZGNoYW5nZScsXG4nYmVmb3JlaGVpZ2h0Y2hhbmdlJyxcbidiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuJ2JlZm9yZWhpZGUnLFxuJ2JlZm9yZWxlZnRjaGFuZ2UnLFxuJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsXG4nYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsXG4nYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuJ2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcbidiZWZvcmVyaWdodGNoYW5nZScsXG4nYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsXG4nYmVmb3Jlc2hvdycsXG4nYmVmb3JldG9mcm9udCcsXG4nYmVmb3JldG9wY2hhbmdlJyxcbidiZWZvcmV3aWR0aGNoYW5nZScsXG4nYmx1cicsXG4nYm90dG9tY2hhbmdlJyxcbidjZW50ZXJlZGNoYW5nZScsXG4nY2hhbmdlJyxcbidjbGVhcmljb250YXAnLFxuJ2NsaWNrJyxcbidjb2xsYXBzZScsXG4nZGVzdHJveScsXG4nZGlydHljaGFuZ2UnLFxuJ2Rpc2FibGVkY2hhbmdlJyxcbidkb2NrZWRjaGFuZ2UnLFxuJ2VyYXNlZCcsXG4nZXJyb3JjaGFuZ2UnLFxuJ2V4cGFuZCcsXG4nZmxvYXRpbmdjaGFuZ2UnLFxuJ2ZvY3VzJyxcbidmb2N1c2VudGVyJyxcbidmb2N1c2xlYXZlJyxcbidmdWxsc2NyZWVuJyxcbidoZWlnaHRjaGFuZ2UnLFxuJ2hpZGRlbmNoYW5nZScsXG4naGlkZScsXG4naW5pdGlhbGl6ZScsXG4na2V5ZG93bicsXG4na2V5dXAnLFxuJ2xlZnRjaGFuZ2UnLFxuJ21heEhlaWdodGNoYW5nZScsXG4nbWF4V2lkdGhjaGFuZ2UnLFxuJ21pbkhlaWdodGNoYW5nZScsXG4nbWluV2lkdGhjaGFuZ2UnLFxuJ21vdXNlZG93bicsXG4nbW92ZWQnLFxuJ29yaWVudGF0aW9uY2hhbmdlJyxcbidwYWludGVkJyxcbidwYXN0ZScsXG4ncG9zaXRpb25lZGNoYW5nZScsXG4ncmVtb3ZlZCcsXG4ncmVzaXplJyxcbidyaWdodGNoYW5nZScsXG4nc2Nyb2xsYWJsZWNoYW5nZScsXG4nc2VsZWN0JyxcbidzaG93Jyxcbid0b2Zyb250Jyxcbid0b3BjaGFuZ2UnLFxuJ3VwZGF0ZWRhdGEnLFxuJ3dpZHRoY2hhbmdlJyxcbidyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3RmaWVsZCcsIFxuICBpbnB1dHM6IHNlbGVjdGZpZWxkTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogc2VsZWN0ZmllbGRNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0U2VsZWN0ZmllbGRDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRTZWxlY3RmaWVsZENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsc2VsZWN0ZmllbGRNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmFzZU9uSW5pdChzZWxlY3RmaWVsZE1ldGFEYXRhKVxuICB9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgLy90aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuXG59Il19