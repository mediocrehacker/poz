import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <body>

    <div id="app" className="antialiased">
      <Header />
      <Component />
      <Footer /> 
      </div>
    </body>
  );
}

function Header() {
  return (
    <header className="navbar bg-base-100 top-0 right-0 z-10 fixed h-20 bg-opacity-90 backdrop-blur-sm">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-2xl">Pozitive Web3 Lab</a>
      </div>
      <div title="Change Language" class="dropdown dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost"
          aria-label="Language"
        >
          <svg
            class="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z">
            </path>
            <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z">
            </path>
          </svg>{" "}
          <svg
            width="12px"
            height="12px"
            class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z">
            </path>
          </svg>
        </div>{" "}
        <div
          tabindex="0"
          class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5"
        >
          <ul class="menu menu-sm gap-1">
            <li>
              <button class="active">
                <span class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                  EN
                </span>{" "}
                <span class="font-[sans-serif]">English</span>
              </button>
            </li>
            <li>
              <button>
                <span class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                  RU
                </span>{" "}
                <span class="font-[sans-serif]">Русский</span>
              </button>
            </li>
            <li>
              <button>
                <span class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                  ZH
                </span>{" "}
                <span class="font-[sans-serif]">中文</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <aside>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M247.938 22.512c-5.385.044-10.847.333-16.383.88c49.65 15.005 92.127 46.742 123.267 86.678c-74.16-71.848-204.8-83.864-278.77 6.287c31.555-16.907 66.822-25.68 102.405-27.865C84.727 118.84 4.497 225.975 21.87 343.362c5.088-48.045 28.862-89.52 61.384-123.923c-38.258 74.284-32.22 171.41 40.635 231.185c-25.41-47.422-33.08-102.405-25.536-154.338c-1.3 105.1 83.482 210.304 201.582 198.656c-49.652-15.006-92.126-46.743-123.266-86.68c77.723 65.68 198.16 66.868 278.77-6.288c-118.67 44.753-214.692 21.26-272.243-27.8c-59.206-40.744-78.126-121.06-41.584-184.353a139.021 139.021 0 0 1 23.967-30.66c2.78-3.18 5.636-6.203 8.598-9.074c2.31-1.3 4.622-2.572 6.935-3.824c24.733-17.675 54.666-26.8 84.914-26.028c22.46.573 45.09 6.594 65.88 18.598c44.02 25.415 68.904 71.378 69.593 118.842a61.63 61.63 0 0 1 .957 10.734c0 33.88-27.466 61.344-61.346 61.344c-33.877 0-61.342-27.465-61.342-61.344c0-1.698.083-3.376.218-5.04c5.484 18.857 22.88 32.644 43.504 32.644c25.027 0 45.315-20.29 45.315-45.315c0-24.785-19.903-44.912-44.596-45.298a93.138 93.138 0 0 0-15.167-1.246c-51.192 0-92.69 41.5-92.69 92.69s41.5 92.687 92.69 92.687a96.7 96.7 0 0 0 3.1-.056c-.168.064-.333.132-.5.195a165.74 165.74 0 0 0 12.336-1.03c52.59-.886 123.364-25.954 154.09-71.7c-18.303 8.484-35.666 14.587-52.488 16.763a181.554 181.554 0 0 0 17.482-24.133c36.147-44.718 64.673-112.748 53.784-168.2c-7.195 19.63-15.35 37.046-25.623 51.583c-3.217-46.517-23.284-92.15-63.62-125.244c25.406 47.422 33.076 102.404 25.532 154.337c1.24-100.173-75.723-200.44-185.2-199.535z"
          />
        </svg>
        <p className="font-bold">
          Pozitive Web3 Lab <br />
          Предоставляем позитивный аутсорсинг с 2008 года.
        </p>
        <p>Copyright © 2024 - Все права защищены</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://t.me/pozitiveweb3lab">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M18.483 19.79v-.002l.018-.043L21.5 4.625v-.048c0-.377-.14-.706-.442-.903c-.265-.173-.57-.185-.784-.169a2.681 2.681 0 0 0-.586.12a3.23 3.23 0 0 0-.24.088l-.013.005l-16.72 6.559l-.005.002a1.353 1.353 0 0 0-.149.061a2.27 2.27 0 0 0-.341.19c-.215.148-.624.496-.555 1.048c.057.458.372.748.585.899a2.062 2.062 0 0 0 .403.22l.032.014l.01.003l.007.003l2.926.985c-.01.183.008.37.057.555l1.465 5.559a1.5 1.5 0 0 0 2.834.196l2.288-2.446l3.929 3.012l.056.024c.357.156.69.205.995.164c.305-.042.547-.17.729-.315a1.742 1.742 0 0 0 .49-.635l.008-.017l.003-.006zM7.135 13.875a.3.3 0 0 1 .13-.33l9.921-6.3s.584-.355.563 0c0 0 .104.062-.209.353c-.296.277-7.071 6.818-7.757 7.48a.278.278 0 0 0-.077.136L8.6 19.434z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="https://discord.gg/wnmERJgP">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0a12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055a20.03 20.03 0 0 0 5.993 2.98a.078.078 0 0 0 .084-.026a13.83 13.83 0 0 0 1.226-1.963a.074.074 0 0 0-.041-.104a13.201 13.201 0 0 1-1.872-.878a.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-2.981a.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028M8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38c0-1.312.956-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.956 2.38-2.157 2.38m7.975 0c-1.183 0-2.157-1.069-2.157-2.38c0-1.312.955-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.946 2.38-2.157 2.38"
              />
            </svg>
          </a>
          <a href="https://www.youtube.com/@pozitiveweb3lab-ni1yu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
              </path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}
