'use strict';
const capitalize = require('capitalize');
const pluralize = require('pluralize');
const utilities = require('../../../utilities');
const formConfigs = require('../../../utilities/views/decision/shared/components/formConfigs');
const decisionTabs = require('../../../utilities/views/decision/shared/components/decisionTabs');
const collectionDetailTabs = require('../../../utilities/views/decision/shared/components/collectionDetailTabs');
const detailAsyncHeaderTitle = require('../../../utilities/views/shared/component/layoutComponents').detailAsyncHeaderTitle;
const detailHeaderButtons = require('../../../utilities/views/decision/shared/components/detailHeaderButtons');
const styles = require('../../../utilities/views/constants/styles');
const CONSTANTS = require('../../../utilities/views/decision/constants');
const cardprops = require('../../../utilities/views/decision/shared/components/cardProps');
const formElements = require('../../../utilities/views/decision/shared/components/formElements');
const COMPARATOR_DROPDOWN = CONSTANTS.COMPARATOR_DROPDOWN;
const randomKey = Math.random;
const settings = {
  title: 'Rule Detail',
  type: 'rule',
  location: 'detail',
};

function getRuleFormElement(options) {
  let { prop, index } = options;
  let ruleFormElements = {
    name: {
      name: 'name',
      label: 'Rule Name',
      type: 'text',
      validateOnBlur: true,
      passProps: {
        state: 'isDisabled'
      },
      onBlur: true,
      errorIconRight: true,
      errorIcon: 'fa fa-exclamation',
      layoutProps: {
        style: {
          width: '50%',
          paddingRight: '7px',
        }
      },
    },
    rule_type: {
      name: 'rule_type',
      label: 'Rule Type',
      type: 'dropdown',
      layoutProps: {
        style: {
          width: '50%',
        }
      },
      passProps: {
        selection: true,
        fluid: true,
        disabled: true,
      },
      value: '',
      options: [ {
        label: ' ',
        value: '',
      }, {
        label: 'Simple Rule',
        value: 'simple',
      }, {
        label: 'Combination Rule: AND',
        value: 'AND',
      }, {
        label: 'Combination Rule: OR',
        value: 'OR',
      }, ],
      validateOnChange: true,
      errorIconRight: true,
      errorIcon: 'fa fa-exclamation',
    },
    description: {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      validateOnBlur: true,
      onBlur: true,
      errorIconRight: true,
      errorIcon: 'fa fa-exclamation',
      placeholder: ' ',
      layoutProps: {
      },
    },
    state_property_attribute: {
      name: `rule*${index}*state_property_attribute`,
      value: '',
      errorIconRight: true,
      label: 'Variable',
      validateOnChange: true,
      type: 'remote_dropdown',
      passProps: {
        emptyQuery: true,
        search: true,
        multiple: false,
        debounce: 250,
        searchProps: {
          baseUrl: '/decision/api/variable_dropdown?type=Output',
          limit: 100,
          sort: 'display_title',
          response_field: 'variable_dropdown',
        },
      },
      layoutProps: {
        style: {
          width: '70%',
          paddingRight: '7px',
        }
      },
    },
    variable_type: {
      type: 'layout',
      name: `rule*${index}*variable_type`,
      passProps: {
        className: '__re-bulma_column',
      },
      layoutProps: {
        style: {
          width: '30%',
        }
      },
      value: {
        component: 'div',
        props: {
          className: '__re-bulma_control __form_element_has_value',
        },
        children: [{
          component: 'label',
          props: {
            className: '__re-bulma_label',
            style: {
              textAlign: 'right',
            }
          },
          children: [{
            component: 'ResponsiveButton',
            children: 'Create New Variable',
            props: {
              onClick: 'func:window.closeModalAndCreateNewModal',
              onclickProps: {
                title: 'Create New Variable',
                pathname: '/decision/variables/create',
              },
              style: {
                display: 'inline-block',
                lineHeight: 1,
                fontWeight: 'normal',
                cursor: 'pointer',
                border: 'transparent',
              },
            },
          },]
        },
        {
          component: 'Input',
          props: {
            readOnly: true,
            value: '',
          }
        }]
      }
    },
    state_property_attribute_value_comparison: {
      name: `rule*${index}*state_property_attribute_value_comparison`,
      validateOnBlur: true,
      onBlur: true,
      errorIconRight: true,
      label: 'Value',
      type: 'text',
      value: '',
      layoutProps: {
        style: {
          width: '70%',
          paddingRight: '7px',
          display: 'inline-block',
          verticalAlign: 'top',
        }
      },
    },
    state_property_attribute_value_comparison_type: {
      name: `rule*${index}*state_property_attribute_value_comparison_type`,
      type: 'dropdown',
      passProps: {
        selection: true,
        fluid: true,
      },
      value: 'value',
      validateOnChange: true,
      errorIconRight: true,
      options: [ {
        'label': 'Value',
        'value': 'value',
      }, {
        'label': 'Variable',
        'value': 'variable',
      }],
      label: 'Value type',
      labelProps: {
        style: {
          visibility: 'hidden',
          whiteSpace: 'nowrap',
        }
      },
      layoutProps: {
        style: {
          width: '30%',
          display: 'inline-block',
          verticalAlign: 'top',
        }
      },
    },
    state_property_attribute_value_minimum: {
      name: `rule*${index}*state_property_attribute_value_minimum`,
      validateOnBlur: true,
      onBlur: true,
      errorIconRight: true,
      createNumberMask: true,
      value: '',
      passProps: {
        mask: 'func:window.numberMaskTwo',
        guid: false,
        placeholderChar: '\u2000',
      },
      label: 'Minimum',
      type: 'text',
      layoutProps: {
        style: {
          width: '70%',
          paddingRight: '7px',
        }
      },
    },
    state_property_attribute_value_minimum_type: {
      name: `rule*${index}*state_property_attribute_value_minimum_type`,
      type: 'dropdown',
      passProps: {
        selection: true,
        fluid: true,
      },
      label: 'Minimum Type',
      labelProps: {
        style: {
          visibility: 'hidden',
          whiteSpace: 'nowrap',
        }
      },
      layoutProps: {
        style: {
          width: '30%',
          display: 'inline-block',
          verticalAlign: 'top',
        }
      },
      value: 'value',
      validateOnChange: true,
      errorIconRight: true,
      options: [ {
        'label': 'Value',
        'value': 'value',
      }, {
        'label': 'Variable',
        'value': 'variable',
      }],
    },
    state_property_attribute_value_maximum: {
      name: `rule*${index}*state_property_attribute_value_maximum`,
      validateOnBlur: true,
      onBlur: true,
      errorIconRight: true,
      createNumberMask: true,
      value: '',
      passProps: {
        mask: 'func:window.numberMaskTwo',
        guid: false,
        placeholderChar: '\u2000',
      },
      label: 'Maximum',
      type: 'text',
      layoutProps: {
        style: {
          width: '70%',
          paddingRight: '7px',
        }
      },
    },
    state_property_attribute_value_maximum_type: {
      name: `rule*${index}*state_property_attribute_value_maximum_type`,
      type: 'dropdown',
      passProps: {
        selection: true,
        fluid: true,
      },
      value: 'value',
      validateOnChange: true,
      errorIconRight: true,
      options: [ {
        'label': 'Value',
        'value': 'value',
      }, {
        'label': 'Variable',
        'value': 'variable',
      }],
      label: 'Maximum Type',
      labelProps: {
        style: {
          visibility: 'hidden',
          whiteSpace: 'nowrap',
        }
      },
      layoutProps: {
        style: {
          width: '30%',
          display: 'inline-block',
          verticalAlign: 'top',
        }
      },
    },
    condition_operation: {
      name: 'condition_operation',
      label: 'Operator',
      type: 'dropdown',
      passProps: {
        selection: true,
        fluid: true,
      },
      value: 'AND',
      validateOnChange: true,
      errorIconRight: true,
      options: [ {
        'label': 'AND',
        'value': 'AND',
      }, {
        'label': 'OR',
        'value': 'OR',
      }],
      layoutProps: {
      },
    },
    condition_group_id: {
      name: 'condition_group_id',
      label: 'OR Group ID',
      type: 'text',
      validateOnBlur: true,
      onBlur: true,
      errorIconRight: true,
      layoutProps: {
      },
    },
    condition_test: {
      label: 'Comparison',
      name: `rule*${index}*condition_test`,
      type: 'dropdown',
      passProps: {
        selection: true,
        fluid: true,
      },
      value: '',
      validateOnChange: true,
      errorIconRight: true,
      // layoutProps: {
      // },
      options: COMPARATOR_DROPDOWN,
    },
    'rule_separator': {
      name: `rule*${index}*rule_separator`,
      type: 'layout',
      value: {
        component: 'div',
        props: {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            margin: '10px 0',
            position: 'relative',
          }
        },
        children: [
          {
            component: 'hr',
            props: {
              style: {
                border: 'none',
                borderBottom: '1px dashed #bbb',
                width: '100%',
              }
            }
          },
          {
            component: 'span',
            props: {
              style: {
                padding: '0 20px',
                background: 'white',
                position: 'absolute',
                color: '#bbb',
                fontWeight: 900,
                fontSize: '13px',
              }
            },
            children: 'AND'
          }
        ]
      }
    },
    add_button: {
      name: 'plus_counter',
      label: ' ',
      type: 'button',
      max: 3,
      passProps: {
        children: 'ADD CONDITION',
        color: 'isPrimary',
      },
      onClick: 'func:window.plusCounterOnClick',
      value: 0,
      layoutProps: {
        style: {
          width: 'auto',
          margin: '1rem 5px',
        }
      },
    },
    delete_button: {
      label: ' ',
      name: 'minus_counter',
      type: 'button',
      onClick: 'func:window.minusCounterOnClick',
      value: 0,
      passProps: {
        children: 'DELETE CONDITION',
        color: 'isDanger',
      },
      layoutProps: {
        style: {
          width: 'auto',
          margin: '1rem 5px',
        }
      },
    },
    formheader: {
      name: 'formheader',
      type: 'layout',
      value: {
        component: 'div',
        props: {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            margin: '10px 0',
            position: 'relative',
          }
        },
        children: [
          {
            component: 'hr',
            props: {
              style: {
                border: 'none',
                borderBottom: '1px dashed #bbb',
                width: '100%',
              }
            }
          },
          {
            component: 'span',
            props: {
              style: {
                padding: '0 20px',
                background: 'white',
                position: 'absolute',
                color: '#bbb',
                fontWeight: 900,
                fontSize: '13px',
              }
            },
            children: 'RULE PASSES IF'
          }
        ]
      }
    },
  };
  return Object.assign({}, ruleFormElements[ prop ]);
}

function getRuleFormValidations(index) {
  const ruleValidations = {
    [ `rule*${index}*state_property_attribute` ]: {
      'name': `rule*${index}*state_property_attribute`,
      'constraints': {
        [ `rule*${index}*state_property_attribute` ]: {
          'presence': { 'message': '^Variable is required.' },
        },
      },
    },
    [ `rule*${index}*condition_test` ]: {
      'name': [ `rule*${index}*condition_test` ],
      'constraints': {
        [ `rule*${index}*condition_test` ]: {
          'presence': { 'message': '^Comparator is required.' },
        },
      },
    },
    [ `rule*${index}*state_property_attribute_value_minimum` ]: {
      'name': `rule*${index}*state_property_attribute_value_minimum`,
      'constraints': {
        [ `rule*${index}*state_property_attribute_value_minimum` ]: {
          'presence': { 'message': '^Minimum is required.' },
        },
      },
    },
    [ `rule*${index}*state_property_attribute_value_maximum` ]: {
      'name': `rule*${index}*state_property_attribute_value_maximum`,
      'constraints': {
        [ `rule*${index}*state_property_attribute_value_maximum` ]: {
          'presence': { 'message': '^Maximum is required.', }
        },
      },
    },
    [ `rule*${index}*state_property_attribute_value_comparison` ]: {
      'name': `rule*${index}*state_property_attribute_value_comparison`,
      'constraints': {
        [ `rule*${index}*state_property_attribute_value_comparison` ]: {
          'presence': { 'message': '^Value is required.', }
        },
      },
    },
    [ `rule*${index}*condition_test` ]: {
      'name': `rule*${index}*condition_test`,
      'constraints': {
        [ `rule*${index}*condition_test` ]: {
          'presence': { 'message': '^Comparator is required.', },
        },
      },
    },
  };
  return ruleValidations;
}

let filterFunc = {
  'state_property_attribute_value_comparison': 'func:window.valueFilterThree',
  // 'state_property_attribute_value_comparison_type': 'func:window.valueTypeFilter',
  'variable_type': 'func:window.variableTypeFilterTwo',
  'state_property_attribute': 'func:window.variableDropdownFilter',
};

function getStandardFields(idx, reducer) {
  let standardFields = [
    `state_property_attribute`,
    `variable_type`,
    `state_property_attribute_value_comparison`,
    `state_property_attribute_value_comparison_type`, ];
  return (reducer) ?
    standardFields.reduce((reduced, element) => reducer({ reduced, element, idx }), undefined)
    : standardFields;
}

let standardFilterReducer = (options) => {
  let { element, reduced, idx } = options;
  if (typeof reduced === 'undefined') {
    reduced = {};
  }
  reduced[ `rule*${idx}*${element}` ] = filterFunc[ element ];
  return reduced;
}

let standardOrderReducer = (options) => {
  let { element, reduced, idx } = options;
  if (typeof reduced === 'undefined') {
    reduced = [];
  }
  reduced.push(`rule*${idx}*${element}`);
  return reduced;
};

let standardFormElementsReducer = (options) => {
  let { element, reduced, idx } = options;
  if (typeof reduced === 'undefined') {
    reduced = [];
  }
  reduced.push(getRuleFormElement({ prop: element, index: idx }));
  return reduced;
}

let { validations, hiddenFields, formgroups, additionalComponents } = formConfigs[ settings.type ].edit;
let pluralizedType = pluralize(settings.type);
let url = `/decision/api/standard_${pluralizedType}/:id?format=json`;
let headerButtons = detailHeaderButtons({ type: settings.type, location: settings.location });
module.exports = {
  'containers': {
    [ `/decision/strategies/:id/assignments/create` ]: {
      layout: {
        // privileges: [101, 102],
        component: 'div',
        children: [
          {
            component: 'Container',
            children: [
              {
                component: 'ResponsiveFormContainer',
                asyncprops: {
                  formdata: [ 'ruledata', 'data' ],
                  __formOptions: [ 'ruledata', 'formoptions' ],
                },
                props: {
                  validations: Object.assign({}, getRuleFormValidations(0)),
                  formgroups: [ {
                    gridProps: {
                      key: randomKey(),
                      className: '__dynamic_form_elements',
                      style: {
                        display: 'flex',
                        justifyContent: 'center',
                      },
                    },
                    formElements: [
                      // getRuleFormElement({ prop: 'formheader' }),
                      ...getStandardFields(0, standardFormElementsReducer),
                    ],
                    order: [
                      'formheader',
                      ...getStandardFields(0, standardOrderReducer),
                    ]
                  }, {
                    gridProps: {
                      key: randomKey(),
                      className: 'modal-footer-btns',
                    },
                    order: [ 'submit' ],
                    formElements: [ {
                      type: 'submit',
                      name: 'submit',
                      value: 'SAVE',
                      passProps: {
                        color: 'isPrimary',
                      },
                      layoutProps: {
                        style: {
                          textAlign: 'center'
                        }
                      }
                    }, ]
                  }, ],
                  renderFormElements: Object.assign({}, getStandardFields(0, standardFilterReducer)),
                  form: {
                    "cardForm": false,
                    cardFormTitle: 'Rule Detail',
                    "cardFormProps": styles.cardFormProps,
                    flattenFormData: true,
                    footergroups: false,
                    useFormOptions: true,
                    onSubmit: {
                      url: `/decision/api/standard_strategies/:id/:name/:segment_index/createRule?format=json&method=addRule`,
                      params: [
                        { 'key': ':id', 'val': 'id' }, { 'key': ':name', 'val': 'module_name' }, { 'key': ':segment_index', 'val': 'segment_index' },
                      ],
                      options: {
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        method: 'PUT',
                      },
                      successProps: {
                        type: 'success',
                        text: 'Changes saved successfully!',
                        timeout: 10000,
                      },
                      successCallback: 'func:window.hideModalandCreateNotificationandRefresh',
                    },
                    validations: [],
                    hiddenFields: [ {
                      form_name: 'id',
                      form_val: 'id',
                    }, {
                      form_name: 'type',
                      form_val: 'type',
                    }, {
                      form_name: 'rule_type',
                      form_static_val: 'simple',
                    }, {
                      form_name: 'name',
                      form_val: 'name',
                    },],
                  },
                }
              }
            ]
          }]
      },
      'resources': {
        [ `ruledata` ]: `/decision/api/standard_strategies/:id/assignments/createRule?init=true&type=assignments`,
        checkdata: {
          url: '/auth/run_checks',
          settings: {
            onSuccess: [ 'func:window.redirect', ],
            onError: ['func:this.props.logoutUser', 'func:window.redirect', ],
            blocking: true, 
            renderOnError: false,
          },
        },
      },
      'callbacks': [ 'func:window.dynamicModalHeight' ],
      'pageData': {
        'title': settings.title,
        'navLabel': 'Decision Product',
      },
      'onFinish': 'render',
    },
  },
};
