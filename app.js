require('./javascripts/welcome.js');
require('./javascripts/bulletins.js');
require('./javascripts/two_factors.js');
require('./javascripts/fund_source.js');
require('./javascripts/dimmer.js');
require('./javascripts/account.js');
require('./javascripts/withdraw.js');
require('./javascripts/pie.js');
require('./javascripts/extrust.js');
require('./javascripts/api_token.js');

require('jquery-ujs/src/rails.js');
require('../vendor/client/jquery.remotipart.js');

require('./semantic/dist/components/dropdown.js');
require('./semantic/dist/components/transition.js');
require('./semantic/dist/components/popup.js');

require('./semantic/dist/components/site.css');
require('./semantic/dist/components/dropdown.css');
require('./semantic/dist/components/reset.css');
require('./semantic/dist/components/grid.css');
require('./semantic/dist/components/header.css');
require('./semantic/dist/components/button.css');
require('./semantic/dist/components/container.css');
require('./semantic/dist/components/divider.css');
require('./semantic/dist/components/flag.css');
require('./semantic/dist/components/icon.css');
require('./semantic/dist/components/image.css');
require('./semantic/dist/components/label.css');
require('./semantic/dist/components/list.css');
require('./semantic/dist/components/loader.css');
require('./semantic/dist/components/menu.css');
require('./semantic/dist/components/segment.css');
require('./semantic/dist/components/sidebar.css');
require('./semantic/dist/components/statistic.css');
require('./semantic/dist/components/form.css');
require('./semantic/dist/components/dimmer.css');
require('./semantic/dist/components/input.css');
require('./semantic/dist/components/message.css');
require('./semantic/dist/components/accordion.css');
require('./semantic/dist/components/rail.css');
require('./semantic/dist/components/table.css');
require('./semantic/dist/components/transition.css');
require('./semantic/dist/components/popup.css');
require('./semantic/dist/components/comment.css');
require('./semantic/dist/components/breadcrumb.css');
require('./semantic/dist/components/step.css');

require('./styles/app.scss');

let $ = require('jquery/dist/jquery.js');
let Clipboard = require('clipboard/dist/clipboard.js');

$(document).ready(function() {
  $('.ui.dropdown').dropdown();
  $('.popup').popup({position : 'top right'});

  $('.ui.kyc.form').on('change', '.kyc.certificate.file', function() {
    $(this).parents('form').trigger('submit');
  }).find(".ui.image").dimmer({ on: 'hover' });

  $('[data-qrcode]').each(function() {
    $(this).qrcode($(this).data('qrcode'));
  });

  $('[data-action-show-img]').on('click', function() {
    $($(this).data('action-show-img')).removeClass("hidden");
  });

  new Clipboard('[data-clipboard-target]')
});
