import './App.css'
import { useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {schema} from './schema'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';


interface RegistrationForm {
  name: string
  age: number
  email: string
}

function App() {
  const {register,formState:{errors}, handleSubmit} = useForm<RegistrationForm>({
    resolver: yupResolver(schema),
    mode:'onBlur',
    defaultValues:{
      name:'',
      age:5,
      email:''

    }
  })

  const onSubmit=(formData:RegistrationForm) => {
    alert(Object.entries(formData).map(([key,value])=>`${key} = ${value}`).join('\n'))
  }

  return (
 
    
    
      
      <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection:'column', gap:'20px'}}>
      <TextField
      label='Имя'
      {...register('name')}
      error={Boolean(errors['name'])}
      helperText={errors['name']?.message}
      />
      
      <TextField
      label='Возраст'
      {...register('age')}
      error={Boolean(errors['age'])}
      helperText={errors['age']?.message}
      />
      
      <TextField
      label='Email'
      {...register('email')}
      error={Boolean(errors['email'])}
      helperText={errors['email']?.message}
      />
      <Button type='submit' variant="contained">Проверить данные</Button>
      </form>

    
    
 
    
  

  )
}

export default App
