import { shallowMount } from '@vue/test-utils'
import ParentComp from "@/components/parent-comp";


describe("TestMessage.vue", () => {
    it("", () => {
        const wrapper = shallowMount(ParentComp)
        expect(wrapper.text()).toContain("Parent")
    })
})
