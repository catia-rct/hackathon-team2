import {Component, Input, ChangeDetectionStrategy, ElementRef} from '@angular/core';
import * as d3  from 'd3';

@Component({
    selector: 'curved-edges-arc-diagram',
    template: `<div>
                    <svg [attr.width]="2*CONFIG.PIE_RADIUS" [attr.height]=2*CONFIG.PIE_RADIUS></svg>
               </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurvedEdgesArcComponent {

    /**
     *  Specifies the default settings for the diagrams
     *
     * THICKNESS : the thickness of the arc ( assume all arcs are with one thickness
     * PIE_RADIUS: the radius of the whole diagram
     * MARGIN: the margin between the separate arcs
     *
     * @type {{THICKNESS: number; PIE_RADIUS: number; MARGIN: number}}
     */
    private defaultConfig: any = {
        THICKNESS: 12,
        PIE_RADIUS: 77,
        MARGIN: 0
    };
    /**
     * An input object with the interface of the defaultConfig
     * @type {any}
     */
    @Input() CONFIG: any = null;
    /**
     *
     * @type {
     *
     * The actual data to be visualised by the component. Each
     * arc has to be defined by : startAngle, endAngle, color, opacity
     * The text property contains the text, which has to be displayed separated by
     * lines. Each line is an entry in the array and can be styled differently.
     *
     *
     * diagrams: [
     *              {
     *                  startAngle: 0,
     *                  endAngle: 1.5 * Math.PI,
     *                  color: 'red',
     *                  opacity: 0.8
     *              }
     *           ]
     * text: [
     *          {
     *              text: '100k',
     *              textSize: '35px',
     *              color: 'red',
     *              fontFamily: 'sans-serif'
     *          }
     *       ]
     *
     *
     * }
     */
    @Input() data: any = null;

    /**
     * Reference to the svg element
     * @type {any}
     */
    private svg: any = null;

    constructor(private elemRef: ElementRef) {
        // console.log(this.elemRef.nativeElement.children[0].children[0]);
    }


    public ngOnInit(): void {
        this.CONFIG = Object.assign(this.defaultConfig, this.CONFIG);
        this.svg = d3.select(this.elemRef.nativeElement.querySelector('svg'));
        this.drawArcs();
        this.drawText();
    }

    /**
     * Draws the suplied arc data to the svg element
     */
    private drawArcs(): void {
        const diagramsData = this.data.diagrams || [];
        for (let i = 0; i < diagramsData.length; i++) {
            /*
             If the input data is incorrect skip the current iteration
             */
            if (typeof diagramsData[i].startAngle !== 'number' || typeof diagramsData[i].endAngle !== 'number') {
                continue;
            }


            let arc = d3.arc().cornerRadius(this.CONFIG.THICKNESS)
                .outerRadius(this.CONFIG.PIE_RADIUS - i * this.CONFIG.THICKNESS - this.CONFIG.MARGIN)
                .innerRadius(this.CONFIG.PIE_RADIUS - (i + 1) * this.CONFIG.THICKNESS)
                .startAngle(diagramsData[i].startAngle)
                .endAngle(diagramsData[i].endAngle);
            this.svg.append("path")
                .attr("d", arc)
                .style('fill', diagramsData[i].color).style('opacity', diagramsData[i].opacity || 1)
                .attr("transform", `translate(${this.CONFIG.PIE_RADIUS},${this.CONFIG.PIE_RADIUS})`);

        }
    }

    /**
     * Creates a text element in the svg and
     * writes all the text supplied via this.data.text input
     */
    private drawText(): void {
        let textElement = this.svg.append('text')
            .attr('x', this.CONFIG.PIE_RADIUS)
            .attr('y', this.CONFIG.PIE_RADIUS);

        const textData = this.data.text || [];

        for (let i = 0; i < this.data.text.length; i++) {
            let element = textData[i];
            /**
             * If the input data is incorrect skip the iteration
             */
            if (typeof element.textSize !== 'number' || !element.text) {
                continue;
            }

            textElement.append("tspan")
                .attr('x', this.CONFIG.PIE_RADIUS)
                .attr('dy', i === 0 ? 0 : element.textSize)
                .attr("font-family", element.fontFamily)
                .attr("font-size", `${element.textSize}px`)
                .attr("fill", element.color)
                .style('text-anchor', 'middle')
                .text(element.text);

        }
    }
}