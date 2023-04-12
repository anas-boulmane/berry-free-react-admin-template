export default {
  $schema: 'http://json-schema.org/draft-06/schema#',
  version: 0,
  title: 'seales',
  type: 'object',
  primaryKey: 'orderNumber',
  additionalProperties: false,
  properties: {
    user_Id: {
      type: 'string',
      maxLength: 200
    },
    orderNumber: {
      type: 'string',
      maxLength: 200
    },
    quantityOrdered: {
      type: 'integer'
    },
    priceEach: {
      type: 'number'
    },
    orderLineNumber: {
      type: 'integer'
    },
    sales: {
      type: 'number'
    },
    orderDate: {
      type: 'string'
    },
    status: {
      type: 'string'
    },
    qtr_Id: {
      type: 'integer'
    },
    month_Id: {
      type: 'integer'
    },
    year_Id: {
      type: 'integer'
    },
    productLine: {
      type: 'string'
    },
    msrp: {
      type: 'number'
    },
    productCode: {
      type: 'string'
    },
    customerName: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    addressLine1: {
      type: 'string'
    },
    addressLine2: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    postalCode: {
      type: 'string',
      format: 'integer'
    },
    country: {
      type: 'string'
    },
    territory: {
      type: 'string'
    },
    contactLastName: {
      type: 'string'
    },
    contactFirstName: {
      type: 'string'
    },
    dealSize: {
      type: 'string'
    }
  },
  required: [
    'addressLine1',
    'addressLine2',
    'city',
    'contactFirstName',
    'contactLastName',
    'country',
    'customerName',
    'dealSize',
    'month_Id',
    'msrp',
    'orderDate',
    'orderLineNumber',
    'orderNumber',
    'phone',
    'postalCode',
    'priceEach',
    'productCode',
    'productLine',
    'qtr_Id',
    'quantityOrdered',
    'sales',
    'state',
    'status',
    'territory',
    'user_Id',
    'year_Id'
  ]
};