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
export class pivotconfigformMetaData {
  public static XTYPE: string = 'pivotconfigform';
  public static PROPERTIES: string[] = [
    'eng',
    'viewport',
    'align',
    'plugins',
    'responsiveConfig',
    'responsiveFormulas',
    'activeChildTabIndex',
    'activeItem',
    'alignSelf',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'anchor',
    'anchorPosition',
    'api',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'baseParams',
    'bbar',
    'bind',
    'bodyBorder',
    'bodyCls',
    'bodyPadding',
    'bodyStyle',
    'border',
    'bottom',
    'bubbleDirty',
    'buttonAlign',
    'buttons',
    'buttonToolbar',
    'cardSwitchAnimation',
    'centered',
    'closable',
    'closeAction',
    'closeToolText',
    'cls',
    'collapsed',
    'collapsible',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultToolWeights',
    'defaultType',
    'dirty',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'enableSubmissionForm',
    'enctype',
    'fieldDefaults',
    'fieldSeparators',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'header',
    'headerPosition',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'inactiveChildTabIndex',
    'innerCls',
    'inputBorders',
    'instanceCls',
    'itemId',
    'items',
    'jsonSubmit',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'lbar',
    'left',
    'listeners',
    'manageBorders',
    'margin',
    'masked',
    'maxHeight',
    'maxWidth',
    'method',
    'minButtonWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'multipartDetection',
    'name',
    'nameable',
    'nameHolder',
    'padding',
    'paramOrder',
    'paramsAsHash',
    'plugins',
    'publishes',
    'rbar',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'resetFocusPosition',
    'resizable',
    'right',
    'ripple',
    'scrollable',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'standardButtons',
    'standardSubmit',
    'stateful',
    'statefulDefaults',
    'stateId',
    'style',
    'submitOnAction',
    'tabIndex',
    'tbar',
    'timeout',
    'title',
    'titleAlign',
    'titleCollapse',
    'toFrontOnShow',
    'toolDefaults',
    'tools',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'trackResetOnLoad',
    'translatable',
    'twoWayBindable',
    'ui',
    'url',
    'userCls',
    'userSelectable',
    'viewModel',
    'weight',
    'weighted',
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
{name:'activate',parameters:'newActiveItem,pivotconfigform,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'pivotconfigform,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'pivotconfigform'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'pivotconfigform'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'pivotconfigform,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforesubmit',parameters:'pivotconfigform,values,options,e'},
{name:'beforetofront',parameters:'pivotconfigform'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'pivotconfigform,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'pivotconfigform'},
{name:'deactivate',parameters:'oldActiveItem,pivotconfigform,newActiveItem'},
{name:'destroy',parameters:''},
{name:'dirtychange',parameters:'pivotconfigform,dirty'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'pivotconfigform'},
{name:'drawershow',parameters:'pivotconfigform'},
{name:'erased',parameters:'sender'},
{name:'exception',parameters:'pivotconfigform,result'},
{name:'expand',parameters:'pivotconfigform'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'pivotconfigform,event'},
{name:'focusenter',parameters:'pivotconfigform,event'},
{name:'focusleave',parameters:'pivotconfigform,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:'pivotconfigform,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'pivotconfigform,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'pivotconfigform,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'pivotconfigform,context'},
{name:'resizedragcancel',parameters:'pivotconfigform,context'},
{name:'resizedragend',parameters:'pivotconfigform,context'},
{name:'resizedragstart',parameters:'pivotconfigform,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'submit',parameters:'pivotconfigform,result,e'},
{name:'tofront',parameters:'pivotconfigform'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
'activate',
'activeItemchange',
'add',
'added',
'beforeactiveItemchange',
'beforebottomchange',
'beforecenteredchange',
'beforecollapse',
'beforedisabledchange',
'beforedockedchange',
'beforeexpand',
'beforeheightchange',
'beforehiddenchange',
'beforehide',
'beforeleftchange',
'beforemaxHeightchange',
'beforemaxWidthchange',
'beforeminHeightchange',
'beforeminWidthchange',
'beforeorientationchange',
'beforeresizedragstart',
'beforerightchange',
'beforescrollablechange',
'beforeshow',
'beforesubmit',
'beforetofront',
'beforetopchange',
'beforewidthchange',
'blur',
'bottomchange',
'centeredchange',
'collapse',
'deactivate',
'destroy',
'dirtychange',
'disabledchange',
'dockedchange',
'drawerhide',
'drawershow',
'erased',
'exception',
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
'leftchange',
'maxHeightchange',
'maxWidthchange',
'minHeightchange',
'minWidthchange',
'move',
'moved',
'orientationchange',
'painted',
'positionedchange',
'remove',
'removed',
'renderedchange',
'resize',
'resizedrag',
'resizedragcancel',
'resizedragend',
'resizedragstart',
'rightchange',
'scrollablechange',
'show',
'submit',
'tofront',
'topchange',
'updatedata',
'widthchange',
'ready'
];
}
@Component({
  selector: 'ext-pivotconfigform',
  inputs: pivotconfigformMetaData.PROPERTIES,
  outputs: pivotconfigformMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotconfigformComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotconfigformComponent extends EngBase implements OnInit, AfterViewInit, OnChanges  {
    constructor(eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : EngBase) {
        super(eRef.nativeElement,pivotconfigformMetaData,hostComponent)
    }

    public ngOnInit() {
        this.baseOnInit(pivotconfigformMetaData)
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit(pivotconfigformMetaData)
    }



  //public ngAfterContentInit() {
  //  this.baseAfterContentInit()
  //}

  public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}



   // public ngAfterViewChecked() {
   //   console.log('ngAfterViewChecked')
  //}
}

