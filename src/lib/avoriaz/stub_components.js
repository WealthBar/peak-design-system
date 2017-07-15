export function ComponentStub(name) {
  this.rendered = false;
  this.name = name;
  this.render = (h) => {
    this.rendered = true;
    return h();
  };
}

export function stubComponents(component, ...components) {
  const stubs = {};
  components.forEach((name) => {
    stubs[name] = new ComponentStub(name);
  });
  component.components = { ...component.components, ...stubs };
}
