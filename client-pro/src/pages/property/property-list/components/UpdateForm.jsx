import React from 'react';
import { Modal } from 'antd';
import {
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
  ProFormRadio,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';

const UpdateForm = (props) => {
  return (
    <StepsForm
      stepsProps={{
        size: 'small',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{
              padding: '32px 40px 48px',
            }}
            destroyOnClose
            title="Rule configuration"
            visible={props.updateModalVisible}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={props.onSubmit}
    >
      <StepsForm.StepForm
        initialValues={{
          name: props.values.name,
          desc: props.values.desc,
        }}
        title="Basic Information"
      >
        <ProFormText
          name="name"
          label="Rule name"
          width="md"
          rules={[
            {
              required: true,
              message: 'Please enter a rule name!',
            },
          ]}
        />
        <ProFormTextArea
          name="desc"
          width="md"
          label="Rule description"
          placeholder="Please enter at least five characters"
          rules={[
            {
              required: true,
              message: 'Please enter a rule description of at least five characters!',
              min: 5,
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          target: '0',
          template: '0',
        }}
        title="Configure rule properties"
      >
        <ProFormSelect
          name="target"
          width="md"
          label="Monitoring object"
          valueEnum={{
            0: 'Table I',
            1: 'Table II',
          }}
        />
        <ProFormSelect
          name="template"
          width="md"
          label="Rule template"
          valueEnum={{
            0: 'Rule template one',
            1: 'Rule template two',
          }}
        />
        <ProFormRadio.Group
          name="type"
          label="Rule type"
          options={[
            {
              value: '0',
              label: '强',
            },
            {
              value: '1',
              label: '弱',
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          type: '1',
          frequency: 'month',
        }}
        title="设定调度周期"
      >
        <ProFormDateTimePicker
          name="time"
          width="md"
          label="开始时间"
          rules={[
            {
              required: true,
              message: '请选择开始时间！',
            },
          ]}
        />
        <ProFormSelect
          name="frequency"
          label="监控对象"
          width="md"
          valueEnum={{
            month: '月',
            week: '周',
          }}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
