  
import { LightningElement } from 'lwc';
import tom from '@salesforce/resourceUrl/Tom';
import jerry from '@salesforce/resourceUrl/Jerry';

export default class ConditionalRenderingExample extends LightningElement {
    showTemplateOne = true;

    firstImage = tom;
    secondImage = jerry;
    switchImages() {
        this.showTemplateOne = !this.showTemplateOne;
    }
}