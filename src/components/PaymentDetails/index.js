import React, {useState} from 'react';
import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';
import { CountryDropdown } from 'react-country-region-selector'
import './styles.scss';

const initialAddressState = {
    line1: '',
    line2: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
};

const PaymentDetails= () => {
  const [billingAddress, setBillingAddress] = useState({ ...initialAddressState });
  const [shippingAddress, setShippingAddress] = useState({ ...initialAddressState });
  const [recipientName, setRecipientName] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
    const handleFormSubmit = async evt => {
        evt.preventDefault();
    };

    return(
        <div className="paymentDetails">
            <form onSubmit={handleFormSubmit}>

                <div className="group">
                    <h2>
                        Shipping Address
                    </h2>
                </div>

                    <FormInput
                    placeholder="Recipient Name"
                    type="text"
                    />

                    <FormInput
                    placeholder="Line 1"
                    type="text"
                    />

                    <FormInput
                    placeholder="Line 2"
                    type="text"
                    />

                    <FormInput
                    placeholder="City"
                    type="text"
                    />

                    <FormInput
                    placeholder="State"
                    type="text"
                    />

                    <FormInput
                    placeholder="Postal Code"
                    type="text"
                    />
                    
                    <div className="formRow checkoutInput">
                    <CountryDropdown 
                    valueType="short"
                    />
                    </div>

                <div className="group">
                    <h2>
                        Billing Address
                    </h2>
                </div>
                
                    <FormInput
                    placeholder="Recipient Name"
                    type="text"
                    />

                    <FormInput
                    placeholder="Line 1"
                    type="text"
                    />

                    <FormInput
                    placeholder="Line 2"
                    type="text"
                    />

                    <FormInput
                    placeholder="City"
                    type="text"
                    />

                    <FormInput
                    placeholder="State"
                    type="text"
                    />

                    <FormInput
                    placeholder="Postal Code"
                    type="text"
                    />

                    <div className="formRow checkoutInput">
                    <CountryDropdown 
                    valueType="short"
                    />
                    </div>
                <div className="group">
                    <h2>
                        Card Details
                    </h2>
                </div>

            </form>
        
        </div>
    );
}

export default PaymentDetails;