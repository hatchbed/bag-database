// *****************************************************************************
//
// Copyright (c) 2020, Southwest Research Institute® (SwRI®)
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of Southwest Research Institute® (SwRI®) nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL Southwest Research Institute® BE LIABLE
// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
// OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
// DAMAGE.
//
// *****************************************************************************

Ext.define('BagDatabase.views.AboutWindow', {
    extend: 'Ext.window.Window',
    alias: 'widgets.aboutWindow',
    title: 'About',
    layout: 'fit',
    bodyPadding: 5,
    constrainHeader: true,
    html: "<h2>Bag Database 3.5.3-SNAPSHOT</h2>" +
        "<p>Documentation: <a href='https://hatchbed.github.io/bag-database/'>https://hatchbed.github.io/bag-database/</a></p>" +
        "<p>Source Code: <a href='https://github.com/hatchbed/bag-database'>https://github.com/hatchbed/bag-database</a></p>" +
        "<p>Copyright 2015-2024 Southwest Research Institute</p>" +
        "<p>Copyright 2021-2024 Hatchbed, L.L.C.</p>" +
        "<br>" +
        "<p>Icons provided by <a href='http://www.famfamfam.com/lab/icons/silk/'>http://www.famfamfam.com/lab/icons/silk/</a></p>" +
        "<p>A number of open source libraries were used in the creation of this software;<br>" +
        "consult the documentation in the source repository for a full list of attributions.</p>"
});
