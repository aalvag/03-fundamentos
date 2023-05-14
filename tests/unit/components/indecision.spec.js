import Indecision from "@/components/Indecision.vue";
import { shallowMount } from "@vue/test-utils";

describe("Indecision component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Indecision);
  });

  test("should match with the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
