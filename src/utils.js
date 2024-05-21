// utils.js
export function GetTenant() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let tenant = params.tenant;
  if (tenant == null || tenant.length <= 0) {
    tenant = "DemoTenant";
    console.log({ tenant });
  } else {
    console.log({ tenant });
  }
  // Store tenant in a global variable
  window.tenant = tenant;
  return tenant; // This line is optional if you don't need to return the tenant elsewhere
}
  