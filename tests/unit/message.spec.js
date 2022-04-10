import { mount } from '@vue/test-utils'
import TestMessage from "@/components/TestMessage";


describe("TestMessage.vue", () => {
    it("renders props.msg when passed", () => {
        const wrapper = mount(TestMessage, {
            props: {
                msg: "Hello Friends"
            }
        });
        expect(wrapper.text()).toContain("Hello Friends")
    })
})
