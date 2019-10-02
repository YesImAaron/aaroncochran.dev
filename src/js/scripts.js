// Example Javascript File with ES6 support
import {whoAmI} from "./imports"


window.toggleGridOverlay = function() {
  let template = `
    <div id="gridOverlay" class="fixed inset-0 z-50 opacity-25">
      <div class="container px-6 mx-auto h-full">
        <div class="flex h-full items-stretch -mx-6">
          <div class="w-1/12 px-6 flex-initial">
            <div class="bg-red-500 h-full"></div>
          </div>
          <div class="w-1/12 px-6 flex-initial">
            <div class="bg-red-500 h-full"></div>
          </div>
          <div class="w-1/12 px-6 flex-initial">
            <div class="bg-red-500 h-full"></div>
          </div>
          <div class="w-1/12 px-6 flex-initial">
            <div class="bg-red-500 h-full"></div>
          </div>
          <div class="w-1/12 px-6 flex-initial">
            <div class="bg-red-500 h-full"></div>
          </div>
          <div class="w-1/12 px-6 flex-initial">
            <div class="bg-red-500 h-full"></div>
          </div>
          <div class="w-1/12 px-6 flex-initial">
            <div class="bg-red-500 h-full"></div>
          </div>
          <div class="w-1/12 px-6 flex-initial">
            <div class="bg-red-500 h-full"></div>
          </div>
          <div class="w-1/12 px-6 flex-initial">
            <div class="bg-red-500 h-full"></div>
          </div>
          <div class="w-1/12 px-6 flex-initial">
            <div class="bg-red-500 h-full"></div>
          </div>
          <div class="w-1/12 px-6 flex-initial">
            <div class="bg-red-500 h-full"></div>
          </div>
          <div class="w-1/12 px-6 flex-initial">
            <div class="bg-red-500 h-full"></div>
          </div>
        </div>
      </div>
    </div>
  `;
  if ( document.getElementById('gridOverlay') ) {
    document.getElementById('gridOverlay').remove();
  } else {
    document.body.insertAdjacentHTML( 'beforeend', template );

  }
}

