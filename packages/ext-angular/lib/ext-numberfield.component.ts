//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';

declare var Ext: any
import {
  Injectable,
  Host,
  Optional,
  SkipSelf,
  Output,
  OnInit,
  AfterViewInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef,
  SimpleChanges
} from '@angular/core';
import { EngBase } from './eng-base';
export class numberfieldMetaData {
  public static XTYPE: string = 'numberfield';
  public static PROPERTIES: string[] = [
    'eng',
    'viewport',
    'align',
    'plugins',
    'responsiveConfig',
    'responsiveFormulas',
    'alignSelf',
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
    'autoHideInputMask',
    'axisLock',
    'badFormatMessage',
    'bind',
    'bodyAlign',
    'border',
    'bottom',
    'bubbleDirty',
    'centered',
    'clearable',
    'cls',
    'constrainAlign',
    'contentEl',
    'controller',
    'data',
    'dataType',
    'decimals',
    'decimalSeparator',
    'decimalsText',
    'defaultListenerScope',
    'dirty',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'editable',
    'error',
    'errorMessage',
    'errorTarget',
    'errorTip',
    'errorTpl',
    'flex',
    'floated',
    'focusCls',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'id',
    'inline',
    'inputMask',
    'inputType',
    'inputValue',
    'instanceCls',
    'itemId',
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
    'maxHeight',
    'maxLength',
    'maxValue',
    'maxValueText',
    'maxWidth',
    'minHeight',
    'minValue',
    'minValueText',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'padding',
    'parseValidator',
    'pattern',
    'placeholder',
    'plugins',
    'publishes',
    'readOnly',
    'record',
    'reference',
    'relative',
    'renderTo',
    'required',
    'requiredMessage',
    'right',
    'ripple',
    'scrollable',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'sideError',
    'stateful',
    'statefulDefaults',
    'stateId',
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
    'trim',
    'twoWayBindable',
    'ui',
    'underError',
    'userCls',
    'userSelectable',
    'validateDisabled',
    'validationMessage',
    'validators',
    'value',
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
  public static EVENTS: any[] = [
{name:'action',parameters:'numberfield,e'},
{name:'added',parameters:'sender,container,index'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'numberfield'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'numberfield,e'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'change',parameters:'numberfield,newValue,oldValue'},
{name:'clearicontap',parameters:'numberfield,input,e'},
{name:'click',parameters:'e'},
{name:'destroy',parameters:''},
{name:'dirtychange',parameters:'numberfield,dirty'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'errorchange',parameters:'numberfield,error'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'numberfield,e'},
{name:'focusenter',parameters:'numberfield,event'},
{name:'focusleave',parameters:'numberfield,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'keydown',parameters:'numberfield,e'},
{name:'keyup',parameters:'numberfield,e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'mousedown',parameters:'numberfield,e'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'paste',parameters:'numberfield,e'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'removed',parameters:'sender,container,index'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'numberfield'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
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
'destroy',
'dirtychange',
'disabledchange',
'dockedchange',
'erased',
'errorchange',
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
'show',
'tofront',
'topchange',
'updatedata',
'widthchange',
'ready'
];
}
@Component({
  selector: 'ext-numberfield',
  inputs: numberfieldMetaData.PROPERTIES,
  outputs: numberfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtNumberfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtNumberfieldComponent extends EngBase implements OnInit, AfterViewInit, OnChanges  {
    constructor(eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : EngBase) {
        super(eRef.nativeElement,numberfieldMetaData,hostComponent)
    }

    public ngOnInit() {
        this.baseOnInit(numberfieldMetaData)
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit(numberfieldMetaData)
    }



  //public ngAfterContentInit() {
  //  this.baseAfterContentInit()
  //}

  public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}



   // public ngAfterViewChecked() {
   //   console.log('ngAfterViewChecked')
  //}
}

