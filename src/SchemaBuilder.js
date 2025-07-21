import React, { useMemo } from 'react';
import { Form, Input, Select, Button, Row, Col, Typography, Divider } from 'antd';
import { useForm, useFieldArray, Controller, useWatch } from 'react-hook-form';

const { Option } = Select;
const { Title } = Typography;

const SchemaBuilderNested = ({ control, fieldArrayName }) => {
    const { fields, append, remove } = useFieldArray({ control, name: fieldArrayName });

    return (
        <>
            {fields.map((field, index) => (
                <div key={field.id} style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px' }}>
                    <Controller
                        name={`${fieldArrayName}[${index}].name`}
                        control={control}
                        render={({ field }) => <Input placeholder="Field name" {...field} />}
                    />
                    <Controller
                        name={`${fieldArrayName}[${index}].type`}
                        control={control}
                        render={({ field }) => (
                            <Select {...field} placeholder="Select type" style={{ width: 150 }}>
                                <Option value="string">String</Option>
                                <Option value="number">Number</Option>
                                <Option value="nested">Nested</Option>
                            </Select>
                        )}
                    />
                    <Button danger onClick={() => remove(index)} style={{ marginLeft: 10 }}>
                        Delete
                    </Button>
                    {field.type === 'nested' && (
                        <div style={{ marginLeft: '20px', marginTop: '10px' }}>
                            <SchemaBuilderNested control={control} fieldArrayName={`${fieldArrayName}[${index}].children`} />
                        </div>
                    )}
                </div>
            ))}
            <Button onClick={() => append({ name: '', type: 'string', children: [] })}>Add Nested Field</Button>
        </>
    );
};

const SchemaBuilder = () => {
    const { control } = useForm({
        defaultValues: { fields: [] }
    });

    const { fields, append, remove } = useFieldArray({ control, name: 'fields' });
    const watchedFields = useWatch({ control, name: 'fields' });

    const buildJson = (fields) => {
        const schema = {};
        fields.forEach(field => {
            if (field.type === 'nested') {
                schema[field.name] = buildJson(field.children || []);
            } else if (field.type === 'string') {
                schema[field.name] = 'STRING';
            } else if (field.type === 'number') {
                schema[field.name] = 'number';
            }
        });
        return schema;
    };

    const jsonPreview = useMemo(() => buildJson(watchedFields || []), [watchedFields]);

    const renderFields = (fields, control, remove, fieldArrayName) => {
        return fields.map((field, index) => (
            <div key={field.id} style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px' }}>
                <Controller
                    name={`${fieldArrayName}[${index}].name`}
                    control={control}
                    render={({ field }) => <Input placeholder="Field name" {...field} />}
                />
                <Controller
                    name={`${fieldArrayName}[${index}].type`}
                    control={control}
                    render={({ field }) => (
                        <Select {...field} placeholder="Select type" style={{ width: 150 }}>
                            <Option value="string">String</Option>
                            <Option value="number">Number</Option>
                            <Option value="nested">Nested</Option>
                        </Select>
                    )}
                />
                <Button danger onClick={() => remove(index)} style={{ marginLeft: 10 }}>
                    Delete
                </Button>
                {field.type === 'nested' && (
                    <div style={{ marginLeft: '20px', marginTop: '10px' }}>
                        <SchemaBuilderNested control={control} fieldArrayName={`${fieldArrayName}[${index}].children`} />
                    </div>
                )}
            </div>
        ));
    };

    return (
        <Form layout="vertical">
            <Row gutter={24}>
                <Col span={14}>
                    <Title level={4}>Schema Builder</Title>
                    {renderFields(fields, control, remove, 'fields')}
                    <Button type="primary" onClick={() => append({ name: '', type: 'string', children: [] })}>
                        Add Field
                    </Button>
                </Col>
                <Col span={10}>
                    <Title level={4}>Live Real Time JSON Preview</Title>
                    <Divider />
                    <pre
                        style={{
                            background: '#f6f6f6',
                            padding: '10px',
                            borderRadius: '5px',
                            display: 'inline-block',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            width: '500px', 
                        }}
                    >
                        {JSON.stringify(jsonPreview, null, 2)}
                    </pre>

                </Col>
            </Row>
        </Form>
    );
};

export default SchemaBuilder;
