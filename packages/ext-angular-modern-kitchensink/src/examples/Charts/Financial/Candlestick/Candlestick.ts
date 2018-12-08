import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {createData} from './createData'

declare var Ext: any;



Ext.require([
    'Ext.chart.axis.Numeric',
    'Ext.chart.axis.Time',
    'Ext.chart.series.CandleStick',
    'Ext.chart.interactions.Crosshair'
]);
@Component({
  selector: 'Candlestick-component',
  templateUrl: './Candlestick.html',
  styles: [``]
})
export class CandlestickComponent implements OnInit {

  constructor() {

    this.refresh();
   }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;


   store = Ext.create('Ext.data.Store', {
    fields: ['time', 'open', 'high', 'low', 'close']
});

theme:string= 'default';
zoom:boolean= false;

panzoom:any;
crosshair:any;

chart:any;

chartNavReady = function(event) {
    console.log("chartNavReady");
    this.chart = event.ext;
    this.panzoom = this.chart.getInteraction('panzoom');
    this.crosshair = this.chart.getInteraction('crosshair');
}


refresh = () => {
    this.store.loadData(createData(1000));
}

changeTheme = theme => this.theme = theme;

toggleZoomOnPan = (zoomOnPan) => {
    this.toggleCrosshair(false);
    this.panzoom.setZoomOnPan(zoomOnPan);
    this.zoom = zoomOnPan;
}

toggleCrosshair = (crosshair) => {
    this.panzoom.setEnabled(!crosshair);
    this.crosshair.setEnabled(crosshair);
    if(crosshair){
        this.crosshair = crosshair;
    }
}

cartesianAxes = [{
    type: 'numeric',
    fields: ['open', 'high', 'low', 'close'],
    position: 'left',
    maximum: 1000,
    minimum: 0
}, {
    type: 'time',
    fields: ['time'],
    position: 'bottom',
    visibleRange: [0, 0.3],
    style: {
        axisLine: false
    }
}];

cartesianSeries = {
    type: 'candlestick',
    xField: 'time',
    openField: 'open',
    highField: 'high',
    lowField: 'low',
    closeField: 'close',
    style: {
        barWidth: 10,
        opacity: 0.9,
        dropStyle: {
            fill: 'rgb(237,123,43)',
            stroke: 'rgb(237,123,43)'
        },
        raiseStyle: {
            fill: 'rgb(55,153,19)',
            stroke: 'rgb(55,153,19)'
        }
    }
};

cartesianInteractions = [{
    type: 'panzoom',
    axes: {
        left: {
            allowPan: false,
            allowZoom: false
        },
        bottom: {
            allowPan: true,
            allowZoom: true
        }
    }
}, {
    type: 'crosshair',
    axes: {
        label: {
            fillStyle: 'white'
        },
        rect: {
            fillStyle: '#344459',
            opacity: 0.7,
            radius: 5
        }
    }
}];

/*
componentDidMount() {
    const chart = this.refs.chart.cmp;
    this.panzoom = chart.getInteraction('panzoom');
    this.crosshair = chart.getInteraction('crosshair');
}
*/



}