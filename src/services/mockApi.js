// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an API call.
// All calls return promises.

const delay = 1500; // miliseconds

const merchantListResponse = {
    status: 0,
    msg: '',
    data: [
        {
            id: '1',
            firstname: 'Merchant 1 FN',
            lastname: 'Merchant 1 LN',
            avatarUrl: 'http://lorempixel.com/100/100/',
            email: 'merchant@gmail.com',
            phone: '9090909090',
            hasPremium: false,
            bids: [
                {
                    id: 'b1',
                    carTitle: 'Car Title Example',
                    amount: '20000',
                    created: '2018-03-07'
                }
            ]
        },

        {
            id: '1',
            firstname: 'Merchant 2 FN',
            lastname: 'Merchant 2 LN',
            avatarUrl: 'http://lorempixel.com/100/100/',
            email: 'merchant2@gmail.com',
            phone: '9090909090',
            hasPremium: true,
            bids: [
                {
                    id: 'b1',
                    carTitle: 'Car Title Example',
                    amount: '20000',
                    created: '2018-03-07'
                },
                {
                    id: 'b2',
                    carTitle: 'Car Title Example 2',
                    amount: '10000',
                    created: '2018-03-06'
                }
            ]
        }
    ]
};

const merchantAddedResponse = {
    status: 0,
    msg: 'Merchant Added Successfully'
};

const merchantRemovedResponse = {
    status: 0,
    msg: 'Merchant Removed Successfully'
};

const merchantUpdatedResponse = {
    status: 0,
    msg: 'Merchant Updated Successfully'
};

/*******************************************************************/

const getMerchants = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Object.assign({}, merchantListResponse));
        }, delay);
    });
};

const addMerchant = (merchant) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Object.assign(merchantAddedResponse, {data: merchant}));
        }, delay);
    });
};

const removeMerchant = (merchant_id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Object.assign(merchantRemovedResponse, {data: merchant_id }));
        }, delay);
    });
};

const updateMerchant = (merchant) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Object.assign(merchantUpdatedResponse, {data: merchant}));
        }, delay);
    });
};

export {
    getMerchants,
    addMerchant,
    removeMerchant,
    updateMerchant
}