import { mount } from "@vue/test-utils"
import TodoApp from "@/components/TodoApp";


describe("TodoApp.vue", () => {
    it("Should render todo text", () => {
        const wrapper = mount(TodoApp)
        const todo = wrapper.get('[data-test="todo"]')
        expect(todo.text()).toBe("Learn Vue testing")
    });

    it("should add new todo", async () => {
        const wrapper = mount(TodoApp)
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)
        await wrapper.get('[data-test="new-todo"]').setValue('New Todo')
       await wrapper.get('[data-test="form"]').trigger('submit')
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)

    })
})
