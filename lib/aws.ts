import { getCurrentUser } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';
import { signIn, type SignInInput } from 'aws-amplify/auth';
import { signUp } from 'aws-amplify/auth';
import { confirmSignUp, type ConfirmSignUpInput } from 'aws-amplify/auth';



async function checkAuth() {
    try {
        const user = await getCurrentUser();
        console.log('Signed in user:', user);
    } catch (err) {
        console.log('User not signed in');
    }
}

export async function currentAuthenticatedUser() {
    console.log("currentAuthenticatedUser");

    try {
        const { username, userId, signInDetails } = await getCurrentUser();
        console.log(`The username: ${username}`);
        console.log(`The userId: ${userId}`);
        console.log(`The signInDetails: ${signInDetails}`);
        return { username, userId, signInDetails };
    } catch (err) {
        console.log("err logging in", err);
    }
}



export async function currentSession() {
    try {
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    } catch (err) {
        console.log(err);
    }
}



export async function handleSignIn({ username, password }: SignInInput) {
    try {
        const { isSignedIn, nextStep } = await signIn({ username, password });
    } catch (error) {
        console.log('error signing in', error);
    }
}



type SignUpParameters = {
    username: string;
    password: string;
    email: string;
};

export async function handleSignUp({
    username,
    password,
    email,
}: SignUpParameters) {
    try {
        const { isSignUpComplete, userId, nextStep } = await signUp({
            username,
            password,
            options: {
                userAttributes: {
                    email,
                },
                autoSignIn: true
            }
        });

        console.log(userId);
    } catch (error) {
        console.log('error signing up:', error);
    }
}


export async function handleSignUpConfirmation({
    username,
    confirmationCode
}: ConfirmSignUpInput) {
    try {
        const { isSignUpComplete, nextStep } = await confirmSignUp({
            username,
            confirmationCode
        });
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}