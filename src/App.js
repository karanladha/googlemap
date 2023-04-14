// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Flex,
//   HStack,
//   IconButton,
//   Input,
//   SkeletonText,
//   Text,
// } from '@chakra-ui/react'
// import { FaLocationArrow, FaTimes } from 'react-icons/fa'
// import {useJsApiLoader,GoogleMap,Marker,Autocomplete,DirectionsRenderer} from '@react-google-maps/api'
// import {useRef,useState} from 'react'
// const center={lat: 48.8584,lng: 2.2945}
// function App() {
//   const {isLoaded}=useJsApiLoader({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     //yaha librarires dalni hogi autocomplete kai liye
//     libraries: ['places'],
//   })
//   const [map,setMap]=useState(/** @type google.maps.Map */(null))
//   const [directionsResponse,setDirectionsResponse]=useState(null)
//   const [distance,setDistance]=useState('')
//   const [duration,setDuration]=useState('')
//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const originRef=useRef()
//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const destinationRef=useRef()

//   if(!isLoaded){
//     return <SkeletonText />
//   }

//   async function calculateRoute(){
//     if(originRef.current.value==='' || destinationRef.current.value===''){
//       return
//     }
//     //eslint-disable-next-line no-undef
//     const directionsService=new google.maps.DirectionsService()
//     const results= await directionsService.route({
//       origin: originRef.current.value,
//       destination: destinationRef.current.value,
//       //eslint-disable-next-line no-undef
//       travelMode: google.maps.TravelMode.DRIVING
//     })
//     setDirectionsResponse(results)
//     setDistance(results.routes[0].legs[0].distance.text)
//     setDuration(results.routes[0].legs[0].duration.text)
//   }
//   function clearRoute(){
//     //agar cross pai click kiya toh sab kuch blank ho jayega
//     setDirectionsResponse(null)
//     setDistance('')
//     setDuration('')
//     originRef.current.value=''
//     destinationRef.current.value=''
//   }
//   return (
//     <Flex
//       position='relative'
//       flexDirection='column'
//       alignItems='center'
//       bgColor='blue.200'
//       bgImage='https://helios-i.mashable.com/imagery/articles/01wi5CJL3fijj6XB1rAopRI/hero-image.fill.size_1248x702.v1623390702.jpg'
//       bgPos='bottom'
//       h='100vh'
//       w='100vw'
//     >
//       <Box position='absolute' left={0}  h='100%' w='100%'>
//       <GoogleMap 
//       center={center} 
//       zoom={15} 
//       mapContainerStyle={{width:'100%',height:'100%'}}
//       //map mai kya kya feature rakhne hai kuch disable karna hai toh yaha sai kar dunga
//       // options={{
//       //   zoomControl :false
//       // }}
//       onLoad={map => setMap(map)}
//       >
//         <Marker position={center}/>
//         {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
//       </GoogleMap>
//       </Box>
//       <Box
//         p={4}
//         borderRadius='lg'
//         //mt={1000}
//         bgColor='white'
//         shadow='base'
//         minW='container.md'
//         zIndex='modal'
//       >
//         <HStack spacing={4}>
//           <Autocomplete>
//           <Input type='text' placeholder='Origin' ref={originRef}/>
//           </Autocomplete>
//           <Autocomplete>
//           <Input type='text' placeholder='Destination' ref={destinationRef}/>
//           </Autocomplete>
//           <ButtonGroup>
//             <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
//               Calculate Route
//             </Button>
//             <IconButton
//               aria-label='center back'
//               icon={<FaTimes />}
//               onClick={clearRoute}
//             />
//           </ButtonGroup>
//         </HStack>
//         <HStack spacing={4} mt={4} justifyContent='space-between'>
//           <Text>Distance:{distance}</Text>
//           <Text>Duration:{duration} </Text>
//           <IconButton
//             aria-label='center back'
//             icon={<FaLocationArrow />}
//             isRound
//             onClick={() => map.panTo(center)}
//           />
//         </HStack>
//       </Box>
//     </Flex>
//   )
// }

// export default App
// Skip to content
// Search or jump to…
// Pull requests
// Issues
// Codespaces
// Marketplace
// Explore
 
// @karanladha 
// trulymittal
// /
// google-maps-directions-tutorial
// Public
// Fork your own copy of trulymittal/google-maps-directions-tutorial
// Code
// Issues
// 1
// Pull requests
// 1
// Actions
// Projects
// Security
// Insights
// google-maps-directions-tutorial/src/App.js /
// @trulymittal
// trulymittal added README.md
// Latest commit 3043f34 on Mar 14, 2022
//  History
//  1 contributor
// 152 lines (141 sloc)  3.97 KB
 

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'


const center = { lat: 28.7041, lng:  77.1025}
function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      bgImage='https://helios-i.mashable.com/imagery/articles/01wi5CJL3fijj6XB1rAopRI/hero-image.fill.size_1248x702.v1623390702.jpg'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
      >
        <HStack spacing={2} justifyContent='space-between'>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input type='text' placeholder='Origin' ref={originRef} />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          />
        </HStack>
      </Box>
    </Flex>
  )
}

export default App
