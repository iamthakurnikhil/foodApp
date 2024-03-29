import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { titles, colors, btn1, hr80 } from '../../globals/style'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const SignUp = ({navigation}) => {
    const[active,setActive] = useState("");
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [phonefocus, setPhonefocus] = useState(false);
    const [namefocus, setNamefocus] = useState(false);

    const [showpassword, setShowpassword] = useState(false);
    const [showcpassword, setShowcpassword] = useState(false);
    const [cpasswordfocus, setcPasswordfocus] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    
    const [customError, setCustomError] = useState('');
    const [successmsg, setSuccessmsg] = useState(null);


  return (
    <View style={styles.container}>
            {successmsg == null ?
                <View style={styles.container}>
                    <Text style={styles.head1}>Sign Up</Text>
                    {customError !== '' && <Text style={styles.errormsg}>{customError}</Text>}
                    <View style={styles.inputout}>
                        <AntDesign name="user" size={24} color={active === 'user'? colors.text1 : colors.text2} />
                        <TextInput style={styles.input} placeholder="Full Name" onFocus={() => {
                            setActive('user')
                            setCustomError('')
                        }}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>


                    <View style={styles.inputout}>
                        <Entypo name="email" size={24} color={active === 'email' ? colors.text1 : colors.text2} />
                        <TextInput style={styles.input} placeholder="Email" onFocus={() => {
                            setActive('email')
                            setCustomError('')
                        }}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    {/*  */}

                    <View style={styles.inputout}>
                        <Feather name="smartphone" size={24} color={active === 'phone'  ? colors.text1 : colors.text2} />
                        <TextInput style={styles.input} placeholder="Phone Number" onFocus={() => {
                            setActive('phone')
                            setCustomError('')
                        }}
                            onChangeText={(text) => setPhone(text)}
                        />
                    </View>



                    {/* password start */}
                    <View style={styles.inputout}>
                        <MaterialCommunityIcons name="lock-outline" size={24} color={active === 'password' ? colors.text1 : colors.text2} />
                        <TextInput style={styles.input} placeholder="Password" onFocus={() => {
                            setActive('password')
                            setCustomError('')
                        }}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={showpassword === false ? true : false}
                        />

                        <Octicons name={showpassword == false ? "eye-closed" : "eye"} size={24} color="black" onPress={() => setShowpassword(!showpassword)} />
                    </View>
                    {/*  */}
                    <View style={styles.inputout}>
                        <MaterialCommunityIcons name="lock-outline" size={24} color={active === 'cpassword'  ? colors.text1 : colors.text2} />
                        <TextInput style={styles.input} placeholder="Confirm Password" onFocus={() => {
                            setActive('cpassword')
                            setCustomError('')

                        }}
                            onChangeText={(text) => setcPassword(text)}
                            secureTextEntry={showcpassword === false ? true : false}
                        />

                        <Octicons name={showcpassword == false ? "eye-closed" : "eye"} size={24} color="black" onPress={() => setShowcpassword(!showcpassword)} />
                    </View>
                    {/* password end */}


                    <TouchableOpacity style={btn1} onPress={() => handleSignup()}>
                        <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Sign up</Text>
                    </TouchableOpacity>


                    {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
                    <Text style={styles.or}>OR</Text>
                    <Text style={styles.gftxt}>Sign In With </Text>


                    <View style={styles.gf}>
                        <TouchableOpacity>
                            <View style={styles.gficon}>
                                <AntDesign name="google" size={24} color="#EA4335" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.gficon}>
                                <FontAwesome5 name="facebook-f" size={24} color="#4267B2" /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={hr80}></View>
                    <Text >Already have an account?
                        <Text style={styles.signup} onPress={() => navigation.navigate('login')}> Sign In</Text>
                    </Text>
                </View>
                :
                <View style={styles.container1}>
                    <Text style={styles.successmessage}>{successmsg}</Text>
                    <TouchableOpacity style={btn1} onPress={() => navigation.navigate('login')}>
                        <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={btn1} onPress={() => setSuccessmsg(null)}>
                        <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Go Back</Text>
                    </TouchableOpacity>
                </View>

            }
        </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 30,
    },
    container1: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
    },
    head1: {
        fontSize: titles.title1,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 10,
    },
    inputout: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        // alignSelf: 'center',
        elevation: 20,
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: '80%',
    },
    forgot: {
        color: colors.text2,
        marginTop: 20,
        marginBottom: 10,
    },
    or: {
        color: colors.text1,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    gftxt: {
        color: colors.text2,
        marginBottom: 10,
        fontSize: 25,
    },
    gf: {
        flexDirection: 'row'
    },
    gficon: {
        backgroundColor: 'white',
        width: 50,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 20,
    },
    signup: {
        color: colors.text1,
    },
    address: {
        fontSize: 18,
        color: colors.text2,
        textAlign: 'center',
        marginTop: 20,
    },
    errormsg: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    successmessage: {
        color: 'green',
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    }
})