import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/modules/test/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "HI THERE SWEETHEART! HOW ARE YOU?";
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).toMatch(msg);
  });
});
