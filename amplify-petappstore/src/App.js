// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import {  Pets  } from './ui-components';
import { NavBar } from './ui-components';
import {  MarketingFooter  } from './ui-components';
import {  Addpet  } from './ui-components';
import {  ProfileCard  } from './ui-components';

import { withAuthenticator } from '@aws-amplify/ui-react';


function App({user, signOut}) {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();
  const [updatePet, setUpdatePet] = useState();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");

  const navbarOverrides = {
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(!showForm)
      }
    },
    
    Button: {
      style: {
        cursor: "pointer",
      },
      onClick: signOut,
    },

    image: {
      src: user?.attributes?.profile
    }
  }

  const profileOverrides = {
    "MyIcon": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowDetails(false)
      }
    }
  }

  const formOverrides = {

    TextField29766922: {placeholder: name},
    TextField36722702: {placeholder:age},
    TextField36722709: {placeholder:breed},
    TextField36722716: {placeholder:about},
    TextField29766923: {placeholder:image},
    TextField36722728: {placeholder:color},
    
    "Icon": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(false)
        setPet()
      }
    },

    Button29766926 :{isDisabled: updatePet ? true:false},
    Button36722723 :{
      isDisabled: updatePet ? false:true,
      // onClick: ()=> {
      //   setShowForm(false)
      // }
    }
  }

  return (
    <div className="App">
      <NavBar width={'100vw'} overrides={navbarOverrides}/>
      <header className="App-header">
        {showDetails && (<ProfileCard pet={pet}
        style={{
          textAlign: 'left',
          margin: '1rem'
        }}

        overrides={profileOverrides}/>)}

        {showForm && (
          <Addpet
          pet={updatePet}
           style={{
            textAlign:'left',
            margin:'1rem',
          }}

          overrides={formOverrides}
          />
        )}
        
        <Pets overrideItems={({item, index}) => ({
          overrides: {
            Button29766907: {
              onClick: ()=> {
                setShowDetails(!showDetails);
                setPet(item);
              }
            },
            Button36582694: {
              onClick: ()=>{
                if (!showForm) setShowForm(true);
                setUpdatePet(item);
                setName(item.name);
                setAge(item.age);
                setBreed(item.breed);
                setAbout(item.about);
                setImage(item.image);
                setColor(item.color);
              }
            }
          }
        })} />
      </header>
      <MarketingFooter width={'100vw'}/>
    </div>
  );
}

export default withAuthenticator(App);
