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
    orderDate: {
      type: 'string'
    },
    month_Id: {
      type: 'integer'
    },
    year_Id: {
      type: 'integer'
    },
    products: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          productCode: {
            type: 'string'
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
          status: {
            type: 'string'
          },
          qtr_Id: {
            type: 'integer'
          },
          productLine: {
            type: 'string'
          },
          msrp: {
            type: 'number'
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
          'productCode',
          'quantityOrdered',
          'priceEach',
          'orderLineNumber',
          'sales',
          'status',
          'qtr_Id',
          'productLine',
          'msrp',
          'customerName',
          'phone',
          'addressLine1',
          'addressLine2',
          'city',
          'state',
          'postalCode',
          'country',
          'territory',
          'contactLastName',
          'contactFirstName',
          'dealSize'
        ]
      }
    }
  },
  required: [
    'user_Id',
    'orderNumber',
    'orderDate',
    'month_Id',
    'year_Id',
    'products'
  ]
};
