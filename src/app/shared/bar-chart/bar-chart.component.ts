
import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }

  
  createChart(): void{
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun' ], 
	       datasets: [
          {
            label: "Sales",
            data: ['1000','2800', '3000', '4050', '2350','3005','11430'],
            backgroundColor: '#D8F1FF',
            borderRadius: Number.MAX_VALUE,
            barThickness: 10,
            barPercentage: 0.5,
            
            
          },
          {
            label: "Profit",
            data: ['2000', '2350', '3500', '6400', '5000','2500','10000'],
            backgroundColor: '#FFF2D5',
            borderRadius: Number.MAX_VALUE,
            barThickness: 10,
            barPercentage: 0.5,
          }  
        ]
      },
      options: {
        plugins: {
          legend: {
              labels: {
                  font: {
                      
                      size: 14,
                      family:  "'Poppins', sans-serif",
                      weight:"400",

                  }
              }
          }
      },


        aspectRatio:1.5,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
  

      y: {
        ticks: {
               
          callback: function(value: any, index, ticks) {
            return value / 1000 + 'K';
          },
          
        },
        grid: {
          display: false
        },

      }
      
    }
    
  }
      
      
    });

 

  }



}
