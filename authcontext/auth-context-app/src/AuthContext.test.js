import React from "react";
import { AuthContext, AuthProvider } from "./AuthContext";
import {mount} from 'enzyme'

describe("login", () => {
    it("sets LoggedIn status to true",() => {
        const TestComponent = () => {
           const {login, isLoggedIn} = React.useContext(AuthContext)
           
           return <>
           
           <div data-testid="value">{isLoggedIn.toString()}</div>
           <button onClick={login}>Login</button>

           </>
        }

        const wrapper = mount(<AuthProvider>
            <TestComponent/>
        </AuthProvider>);

        expect(wrapper.find('[data-testid="value"]').text()).toEqual("false")

        wrapper.find('button').simulate('click')


        expect(wrapper.find('[data-testid="value"]').text()).toEqual("true")
    })
})