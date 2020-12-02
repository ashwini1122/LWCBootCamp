import { LightningElement } from 'lwc';

export default class quickCreate extends LightningElement {

    accountId;
    contactId;
    opportunityId;
    handleSuccess(event) {
        this.accountId = event.detail.id;
        this.contactId = event.detail.id;
        this.opportunityId = event.detail.id;
    }
    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }

}