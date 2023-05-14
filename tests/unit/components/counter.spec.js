import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  it("renders custom title correctly", () => {
    const customTitle = "My Custom Title";
    const localWrapper = shallowMount(Counter, { propsData: { title: customTitle } });

    expect(localWrapper.find("h2").text()).toBe(customTitle.toUpperCase());
  });

  it("renders default title if no title prop is passed", () => {
    expect(wrapper.find("h2").text()).toBe("Counter");
  });

  it("displays the correct initial counter value and squared result", () => {
    expect(wrapper.vm.counter).toBe(5);

    const squaredResult = wrapper.vm.getSquared();
    expect(squaredResult).toBe(25);
  });

  it('increases the counter value by 1 when "+" button is clicked', async () => {
    await wrapper.findAll("button")[0].trigger("click");
    expect(wrapper.vm.counter).toBe(6);

    const squaredResult = wrapper.vm.getSquared();
    expect(squaredResult).toBe(36);
  });

  it('decreases the counter value by 1 when "-" button is clicked', async () => {
    await wrapper.findAll("button")[1].trigger("click");
    expect(wrapper.vm.counter).toBe(4);

    const squaredResult = wrapper.vm.getSquared();
    expect(squaredResult).toBe(16);
  });
});
