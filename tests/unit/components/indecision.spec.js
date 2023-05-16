import Indecision from "@/components/Indecision.vue";
import { shallowMount } from "@vue/test-utils";

describe("Indecision component", () => {
  let wrapper;
  let clgSpy;
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ answer: "yes", forced: false, image: "https://yesno.wtf/assets/yes/2.gif" }),
    })
  );

  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    clgSpy = jest.spyOn(console, "log");
  });

  test("should match with the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("writing in the input does not trigger anything", () => {
    const getanswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    input.setValue("Hola mundo");
    //expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getanswerSpy).not.toHaveBeenCalled();
  });

  test("Typing the symbol '?' should trigger getAnswer", async () => {
    const getanswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("Hola mundo?");
    //expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getanswerSpy).toHaveBeenCalled();
  });

  test("Testing getAnswer method", async () => {
    await wrapper.vm.getAnswer();
    const img = wrapper.find("img");
    expect(img.exists()).toBeTruthy();
    expect(wrapper.vm.image).toBe("https://yesno.wtf/assets/yes/2.gif");
    expect(wrapper.vm.answer).toBe("yes");
  });

  test("Testing getAnswer method - failed fetch", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));
    await wrapper.vm.getAnswer();
    const img = wrapper.find("img");
    expect(img.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe("Could not load the image");
  });
});
