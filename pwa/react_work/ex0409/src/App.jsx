import './App.css'
// import Button from './components/Button'
import { Button } from 'antd';
import { Card } from './components/Card'
import ComboBox from './components/Combobox'

import Stack from '@mui/material/Stack';
import MButton from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import BasicRating from './components/BasicRating';
import { UpCircleOutlined } from '@ant-design/icons';
import { Divider } from "antd";
import DataTable from './components/DataTable';




function App() {

  return (
    <>
    <DataTable/>
      <div>
      <UpCircleOutlined />
      <Divider></Divider>
      <Button>ant d</Button>  
      <BasicRating></BasicRating>
      <Checkbox defaultChecked />
        <Stack spacing={2} direction="row">
          <MButton variant="contained">00</MButton>
          <MButton>11</MButton>
          <MButton>22</MButton>
        </Stack>
      </div>
      <ComboBox></ComboBox>
      <Card primary={false}>TEST</Card>
      <Card>TEST</Card>
      

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
