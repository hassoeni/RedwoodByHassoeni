import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditBerichtenById, UpdateBerichtenInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormBerichten = NonNullable<EditBerichtenById['berichten']>

interface BerichtenFormProps {
  berichten?: EditBerichtenById['berichten']
  onSave: (data: UpdateBerichtenInput, id?: FormBerichten['id']) => void
  error: RWGqlError
  loading: boolean
}

const BerichtenForm = (props: BerichtenFormProps) => {
  const onSubmit = (data: FormBerichten) => {
  
    
    
  
    
    
  
    props.onSave(data, props?.berichten?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBerichten> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        
          <TextField
            name="title"
            defaultValue={props.berichten?.title}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="content"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Content
        </Label>
        
          <TextField
            name="content"
            defaultValue={props.berichten?.content}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="content" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BerichtenForm
