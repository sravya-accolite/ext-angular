//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
var ExtDatecolumnComponent_1;
import * as tslib_1 from "tslib";
import { Injectable, Host, Optional, SkipSelf, Output, OnInit, AfterViewInit, OnChanges, Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
import { EngBase } from './eng-base';
export class datecolumnMetaData {
}
datecolumnMetaData.XTYPE = 'datecolumn';
datecolumnMetaData.PROPERTIES = [
    'eng',
    'viewport',
    'align',
    'plugins',
    'responsiveConfig',
    'responsiveFormulas',
    'activeChildTabIndex',
    'activeItem',
    'align',
    'alignSelf',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'bind',
    'bodyCls',
    'border',
    'bottom',
    'cardSwitchAnimation',
    'cell',
    'centered',
    'cls',
    'columns',
    'computedWidth',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'dataIndex',
    'defaultColumnUI',
    'defaultEditor',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultToolWeights',
    'defaultType',
    'defaultWidth',
    'depends',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'editable',
    'editor',
    'editorDefaults',
    'exportRenderer',
    'exportStyle',
    'exportSummaryRenderer',
    'filter',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'format',
    'formatter',
    'fullscreen',
    'groupable',
    'grouper',
    'groupHeaderTpl',
    'height',
    'hidden',
    'hideable',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'hideShowMenuItem',
    'html',
    'id',
    'ignore',
    'ignoreExport',
    'inactiveChildTabIndex',
    'innerCls',
    'instanceCls',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'left',
    'listeners',
    'locked',
    'manageBorders',
    'margin',
    'masked',
    'maxHeight',
    'maxWidth',
    'menu',
    'menuDisabled',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'nameHolder',
    'padding',
    'plugins',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderer',
    'renderTo',
    'reserveScrollbar',
    'resetFocusPosition',
    'resizable',
    'right',
    'ripple',
    'scope',
    'scratchCell',
    'scrollable',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'sortable',
    'sorter',
    'stateful',
    'statefulDefaults',
    'stateId',
    'style',
    'summary',
    'summaryCell',
    'summaryDataIndex',
    'summaryFormatter',
    'summaryRenderer',
    'tabIndex',
    'text',
    'toFrontOnShow',
    'toolDefaults',
    'tools',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'twoWayBindable',
    'ui',
    'userCls',
    'userSelectable',
    'verticalOverflow',
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
datecolumnMetaData.EVENTS = [
    { name: 'activate', parameters: 'newActiveItem,datecolumn,oldActiveItem' },
    { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
    { name: 'add', parameters: 'datecolumn,item,index' },
    { name: 'added', parameters: 'sender,container,index' },
    { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
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
    { name: 'beforetofront', parameters: 'datecolumn' },
    { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'datecolumn,event' },
    { name: 'bottomchange', parameters: 'sender,value,oldValue' },
    { name: 'centeredchange', parameters: 'sender,value,oldValue' },
    { name: 'deactivate', parameters: 'oldActiveItem,datecolumn,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'dockedchange', parameters: 'sender,value,oldValue' },
    { name: 'erased', parameters: 'sender' },
    { name: 'floatingchange', parameters: 'sender,positioned' },
    { name: 'focus', parameters: 'datecolumn,event' },
    { name: 'focusenter', parameters: 'datecolumn,event' },
    { name: 'focusleave', parameters: 'datecolumn,event' },
    { name: 'fullscreen', parameters: 'sender' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'hide', parameters: 'sender' },
    { name: 'initialize', parameters: 'sender' },
    { name: 'leftchange', parameters: 'sender,value,oldValue' },
    { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'move', parameters: 'datecolumn,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'sender,element' },
    { name: 'positionedchange', parameters: 'sender,positioned' },
    { name: 'remove', parameters: 'datecolumn,item,index' },
    { name: 'removed', parameters: 'sender,container,index' },
    { name: 'renderedchange', parameters: 'datecolumn,item,rendered' },
    { name: 'resize', parameters: 'element,info' },
    { name: 'rightchange', parameters: 'sender,value,oldValue' },
    { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
    { name: 'show', parameters: 'sender' },
    { name: 'tofront', parameters: 'datecolumn' },
    { name: 'topchange', parameters: 'sender,value,oldValue' },
    { name: 'updatedata', parameters: 'sender,newData' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
datecolumnMetaData.EVENTNAMES = [
    'activate',
    'activeItemchange',
    'add',
    'added',
    'beforeactiveItemchange',
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
    'deactivate',
    'destroy',
    'disabledchange',
    'dockedchange',
    'erased',
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
    'rightchange',
    'scrollablechange',
    'show',
    'tofront',
    'topchange',
    'updatedata',
    'widthchange',
    'ready'
];
let ExtDatecolumnComponent = ExtDatecolumnComponent_1 = class ExtDatecolumnComponent extends EngBase {
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, datecolumnMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    ngOnInit() {
        this.baseOnInit(datecolumnMetaData);
    }
    ngAfterViewInit() {
        this.baseAfterViewInit(datecolumnMetaData);
    }
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ngOnChanges(changes) { this.baseOnChanges(changes); }
};
ExtDatecolumnComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
ExtDatecolumnComponent = ExtDatecolumnComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ext-datecolumn',
        inputs: datecolumnMetaData.PROPERTIES,
        outputs: datecolumnMetaData.EVENTNAMES,
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtDatecolumnComponent_1) }],
        template: '<ng-template></ng-template>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
    tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
], ExtDatecolumnComponent);
export { ExtDatecolumnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRhdGVjb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtZGF0ZWNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCLHlDQUF5QztBQUN6QywyQ0FBMkM7OztBQUczQyxPQUFPLEVBQ0wsVUFBVSxFQUNWLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sYUFBYSxFQUNiLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxNQUFNLE9BQU8sa0JBQWtCOztBQUNmLHdCQUFLLEdBQVcsWUFBWSxDQUFDO0FBQzdCLDZCQUFVLEdBQWE7SUFDbkMsS0FBSztJQUNMLFVBQVU7SUFDVixPQUFPO0lBQ1AsU0FBUztJQUNULGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixPQUFPO0lBQ1AsV0FBVztJQUNYLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtJQUNWLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsTUFBTTtJQUNOLFVBQVU7SUFDVixLQUFLO0lBQ0wsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osTUFBTTtJQUNOLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG9C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U0ExQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy9FeHQub25SZWFkeShmdW5jdGlvbigpIHtcbi8vaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmRlY2xhcmUgdmFyIEV4dDogYW55XG5pbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmV4cG9ydCBjbGFzcyBkYXRlY29sdW1uTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnZGF0ZWNvbHVtbic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2VuZycsXG4gICAgJ3ZpZXdwb3J0JyxcbiAgICAnYWxpZ24nLFxuICAgICdwbHVnaW5zJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVGb3JtdWxhcycsXG4gICAgJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLFxuICAgICdhY3RpdmVJdGVtJyxcbiAgICAnYWxpZ24nLFxuICAgICdhbGlnblNlbGYnLFxuICAgICdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F1dG9EZXN0cm95JyxcbiAgICAnYXV0b1NpemUnLFxuICAgICdheGlzTG9jaycsXG4gICAgJ2JpbmQnLFxuICAgICdib2R5Q2xzJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm90dG9tJyxcbiAgICAnY2FyZFN3aXRjaEFuaW1hdGlvbicsXG4gICAgJ2NlbGwnLFxuICAgICdjZW50ZXJlZCcsXG4gICAgJ2NscycsXG4gICAgJ2NvbHVtbnMnLFxuICAgICdjb21wdXRlZFdpZHRoJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RhdGEnLFxuICAgICdkYXRhSW5kZXgnLFxuICAgICdkZWZhdWx0Q29sdW1uVUknLFxuICAgICdkZWZhdWx0RWRpdG9yJyxcbiAgICAnZGVmYXVsdEZvY3VzJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkZWZhdWx0cycsXG4gICAgJ2RlZmF1bHRUb29sV2VpZ2h0cycsXG4gICAgJ2RlZmF1bHRUeXBlJyxcbiAgICAnZGVmYXVsdFdpZHRoJyxcbiAgICAnZGVwZW5kcycsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzcGxheWVkJyxcbiAgICAnZG9ja2VkJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZWRpdGFibGUnLFxuICAgICdlZGl0b3InLFxuICAgICdlZGl0b3JEZWZhdWx0cycsXG4gICAgJ2V4cG9ydFJlbmRlcmVyJyxcbiAgICAnZXhwb3J0U3R5bGUnLFxuICAgICdleHBvcnRTdW1tYXJ5UmVuZGVyZXInLFxuICAgICdmaWx0ZXInLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzYWJsZUNvbnRhaW5lcicsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZm9ybWF0JyxcbiAgICAnZm9ybWF0dGVyJyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2dyb3VwYWJsZScsXG4gICAgJ2dyb3VwZXInLFxuICAgICdncm91cEhlYWRlclRwbCcsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVhYmxlJyxcbiAgICAnaGlkZUFuaW1hdGlvbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGlkZU9uTWFza1RhcCcsXG4gICAgJ2hpZGVTaG93TWVudUl0ZW0nLFxuICAgICdodG1sJyxcbiAgICAnaWQnLFxuICAgICdpZ25vcmUnLFxuICAgICdpZ25vcmVFeHBvcnQnLFxuICAgICdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLFxuICAgICdpbm5lckNscycsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaXRlbUlkJyxcbiAgICAnaXRlbXMnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGVmdCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ2xvY2tlZCcsXG4gICAgJ21hbmFnZUJvcmRlcnMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXNrZWQnLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21lbnUnLFxuICAgICdtZW51RGlzYWJsZWQnLFxuICAgICdtaW5IZWlnaHQnLFxuICAgICdtaW5XaWR0aCcsXG4gICAgJ21vZGFsJyxcbiAgICAnbW9kZWxWYWxpZGF0aW9uJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAnbmFtZUhvbGRlcicsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVjb3JkJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVmZXJlbmNlSG9sZGVyJyxcbiAgICAncmVsYXRpdmUnLFxuICAgICdyZW5kZXJlcicsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmVzZXJ2ZVNjcm9sbGJhcicsXG4gICAgJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsXG4gICAgJ3Jlc2l6YWJsZScsXG4gICAgJ3JpZ2h0JyxcbiAgICAncmlwcGxlJyxcbiAgICAnc2NvcGUnLFxuICAgICdzY3JhdGNoQ2VsbCcsXG4gICAgJ3Njcm9sbGFibGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaG93QW5pbWF0aW9uJyxcbiAgICAnc29ydGFibGUnLFxuICAgICdzb3J0ZXInLFxuICAgICdzdGF0ZWZ1bCcsXG4gICAgJ3N0YXRlZnVsRGVmYXVsdHMnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3R5bGUnLFxuICAgICdzdW1tYXJ5JyxcbiAgICAnc3VtbWFyeUNlbGwnLFxuICAgICdzdW1tYXJ5RGF0YUluZGV4JyxcbiAgICAnc3VtbWFyeUZvcm1hdHRlcicsXG4gICAgJ3N1bW1hcnlSZW5kZXJlcicsXG4gICAgJ3RhYkluZGV4JyxcbiAgICAndGV4dCcsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sRGVmYXVsdHMnLFxuICAgICd0b29scycsXG4gICAgJ3Rvb2x0aXAnLFxuICAgICd0b3AnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RwbCcsXG4gICAgJ3RwbFdyaXRlTW9kZScsXG4gICAgJ3RyYW5zbGF0YWJsZScsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndXNlclNlbGVjdGFibGUnLFxuICAgICd2ZXJ0aWNhbE92ZXJmbG93JyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnd2VpZ2h0ZWQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3gnLFxuICAgICd4dHlwZScsXG4gICAgJ3knLFxuICAgICd6SW5kZXgnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J2FjdGl2YXRlJyxwYXJhbWV0ZXJzOiduZXdBY3RpdmVJdGVtLGRhdGVjb2x1bW4sb2xkQWN0aXZlSXRlbSd9LFxue25hbWU6J2FjdGl2ZUl0ZW1jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2FkZCcscGFyYW1ldGVyczonZGF0ZWNvbHVtbixpdGVtLGluZGV4J30sXG57bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcbntuYW1lOidiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWRvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2RhdGVjb2x1bW4nfSxcbntuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J2RhdGVjb2x1bW4sZXZlbnQnfSxcbntuYW1lOidib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2NlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidvbGRBY3RpdmVJdGVtLGRhdGVjb2x1bW4sbmV3QWN0aXZlSXRlbSd9LFxue25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2VyYXNlZCcscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonZmxvYXRpbmdjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG57bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2RhdGVjb2x1bW4sZXZlbnQnfSxcbntuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidkYXRlY29sdW1uLGV2ZW50J30sXG57bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonZGF0ZWNvbHVtbixldmVudCd9LFxue25hbWU6J2Z1bGxzY3JlZW4nLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtb3ZlJyxwYXJhbWV0ZXJzOidkYXRlY29sdW1uLGl0ZW0sdG9JbmRleCxmcm9tSW5kZXgnfSxcbntuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxue25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxue25hbWU6J3Bvc2l0aW9uZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG57bmFtZToncmVtb3ZlJyxwYXJhbWV0ZXJzOidkYXRlY29sdW1uLGl0ZW0saW5kZXgnfSxcbntuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG57bmFtZToncmVuZGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J2RhdGVjb2x1bW4saXRlbSxyZW5kZXJlZCd9LFxue25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonZWxlbWVudCxpbmZvJ30sXG57bmFtZToncmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3Njcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J2RhdGVjb2x1bW4nfSxcbntuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG57bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcbidhY3RpdmF0ZScsXG4nYWN0aXZlSXRlbWNoYW5nZScsXG4nYWRkJyxcbidhZGRlZCcsXG4nYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScsXG4nYmVmb3JlYm90dG9tY2hhbmdlJyxcbidiZWZvcmVjZW50ZXJlZGNoYW5nZScsXG4nYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuJ2JlZm9yZWRvY2tlZGNoYW5nZScsXG4nYmVmb3JlaGVpZ2h0Y2hhbmdlJyxcbidiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuJ2JlZm9yZWhpZGUnLFxuJ2JlZm9yZWxlZnRjaGFuZ2UnLFxuJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsXG4nYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsXG4nYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuJ2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcbidiZWZvcmVyaWdodGNoYW5nZScsXG4nYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsXG4nYmVmb3Jlc2hvdycsXG4nYmVmb3JldG9mcm9udCcsXG4nYmVmb3JldG9wY2hhbmdlJyxcbidiZWZvcmV3aWR0aGNoYW5nZScsXG4nYmx1cicsXG4nYm90dG9tY2hhbmdlJyxcbidjZW50ZXJlZGNoYW5nZScsXG4nZGVhY3RpdmF0ZScsXG4nZGVzdHJveScsXG4nZGlzYWJsZWRjaGFuZ2UnLFxuJ2RvY2tlZGNoYW5nZScsXG4nZXJhc2VkJyxcbidmbG9hdGluZ2NoYW5nZScsXG4nZm9jdXMnLFxuJ2ZvY3VzZW50ZXInLFxuJ2ZvY3VzbGVhdmUnLFxuJ2Z1bGxzY3JlZW4nLFxuJ2hlaWdodGNoYW5nZScsXG4naGlkZGVuY2hhbmdlJyxcbidoaWRlJyxcbidpbml0aWFsaXplJyxcbidsZWZ0Y2hhbmdlJyxcbidtYXhIZWlnaHRjaGFuZ2UnLFxuJ21heFdpZHRoY2hhbmdlJyxcbidtaW5IZWlnaHRjaGFuZ2UnLFxuJ21pbldpZHRoY2hhbmdlJyxcbidtb3ZlJyxcbidtb3ZlZCcsXG4nb3JpZW50YXRpb25jaGFuZ2UnLFxuJ3BhaW50ZWQnLFxuJ3Bvc2l0aW9uZWRjaGFuZ2UnLFxuJ3JlbW92ZScsXG4ncmVtb3ZlZCcsXG4ncmVuZGVyZWRjaGFuZ2UnLFxuJ3Jlc2l6ZScsXG4ncmlnaHRjaGFuZ2UnLFxuJ3Njcm9sbGFibGVjaGFuZ2UnLFxuJ3Nob3cnLFxuJ3RvZnJvbnQnLFxuJ3RvcGNoYW5nZScsXG4ndXBkYXRlZGF0YScsXG4nd2lkdGhjaGFuZ2UnLFxuJ3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1kYXRlY29sdW1uJyxcbiAgaW5wdXRzOiBkYXRlY29sdW1uTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogZGF0ZWNvbHVtbk1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHREYXRlY29sdW1uQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0RGF0ZWNvbHVtbkNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuICAgIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IEVuZ0Jhc2UpIHtcbiAgICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LGRhdGVjb2x1bW5NZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KGRhdGVjb2x1bW5NZXRhRGF0YSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KGRhdGVjb2x1bW5NZXRhRGF0YSlcbiAgICB9XG5cblxuXG4gIC8vcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgLy8gIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAvL31cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cblxuXG5cbiAgIC8vIHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAvLyAgIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0NoZWNrZWQnKVxuICAvL31cbn1cblxuIl19