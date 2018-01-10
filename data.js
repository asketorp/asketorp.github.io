var menu =
{pages: [
  {
    menuName: 'Asketorps by',
    menuId: 'atpby',
  },
  {
    menuName: 'Byalag',
    menuId: 'byalag',
    subPages: [
      {
        menuName: 'Kartor',
        menuId: 'byalag_kartor',
      }
    ],
  },
  {
    menuName: 'Dikningsföretag',
    menuId: 'dikning',
    subPages: [
      {
        menuName: 'Deltagarlängd',
        menuId: 'dikning_deltagare',
      },
      {
        menuName: 'Dokumentarkiv',
        menuId: 'dikning_dokument',
      },
      {
        menuName: 'Kartor',
        menuId: 'dikning_kartor',
      },
    ],
  },
  {
    menuName: 'Vägsamfällighet',
    menuId: 'vag',
    subPages: [
      {
        menuName: 'Deltagarlängd',
        menuId: 'vag_deltagare',
      },
      {
        menuName: 'Dokumentarkiv',
        menuId: 'vag_dokument',
      },
      {
        menuName: 'Kartor',
        menuId: 'vag_kartor',
      },
    ],
  },
]
};


var data =
{
  atpby: {
    title: 'Asketorps By som den återges av Häradskartan',
    body: '<img src="res/static/atp-hrad2.jpg" border="0" width="700" />',
  },
  byalag: {
    title: 'Asketorps skifteslag (byalag)',
    body: '<p>Bestående av:</p><table><tbody><tr><td><strong>Asketorp 1:2</strong></td><td>3/8 mantal</td></tr><tr><td><strong>Asketorp 1:3</strong></td><td>1/2 mantal</td></tr><tr><td><strong>Asketorp 1:7</strong></td><td>1/8 mantal</td></tr></tbody></table>',
  },
  byalag_kartor: {
    title: 'Kartor byalag',
    body: '<p><a href="res/static/Byalaget/Asketorp_geometriskkarta1_1650.jpg">Geometrisk karta</a></p><p><a href="res/static/Byalaget/Texten_till_geometriskkarta_Asketorp.pdf">Texten på geometrisk karta i översättning</a></p><p><a href="res/static/Byalaget/Asketorp_storskifte_ver2.jpg">Storskifte</a></p><p><a href="res/static/Byalaget/Asketorp_lagaskifte_ver2.jpg">Lagaskifte</a></p>	',
  },
  dikning: {
    title: 'Asketorps dikningsföretag av år 1920',
    body: '<p><strong>Organisationsnummer</strong>: 802426-8826</p><p><strong>Plusgiro</strong>: 478653-9<br /><strong>Bankgiro</strong>: 313-6165</p><p><strong>Ordförande</strong>: Rikard Jernlås, Krikonstigen 5, 771 43 Ludvika.<br /><strong>Kassör/Sekreterare</strong>: Robert Jernlås, Borgviksvägen 2, 736 32 Kungsör.</p>',
  },
  dikning_deltagare: {
    title: 'Deltagarlängd dikningsföretag',
    body: '<table><tbody><tr><td><strong>Asketorp 1:2</strong></td><td>32,99 %</td></tr><tr><td><strong>Asketorp 1:3</strong></td><td>59,33 %</td></tr><tr><td><strong>Asketorp 1:7</strong></td><td>7,68 %</td></tr></tbody></table>',
  },
  dikning_dokument: {
    title: 'Dokumentarkiv för Dikningsforetaget',
    body: null,
    template: 'named-links-template',
    data: {
      path: 'res/dynamic/dikningsforetag/',
      files: [
        {file: '2011-03-26__Debiteringslangd.pdf'},
        {file: '2011-03-26__Kallelse.pdf'},
        {file: '2011-03-26__Motesprotokoll.pdf'},
        {file: '2011-03-26__Revisionsberattelse.pdf'},
        {file: '2011-03-26__Utgift-Inkomststat.pdf'},
        {file: '2011-03-26__Verksamhetsberattelse.pdf'},
        {file: '2011-05-30__Utlatande_Jordbruksverket.pdf'},
        {file: '2011-06-15__Utlatande_Jordbruksverket.pdf'},
        {file: '2011-06-27__Utlatande_Jordbruksverket.pdf'},
        {file: '2011-08-20__Kallelse.pdf'},
        {file: '2011-08-20__Protokoll.pdf'},
        {file: '2011-08-20__Utdebitering.pdf'},
        {file: '2011-08-20__Utgift-Inkomststat.pdf'},
        {file: '2012-04-17__Bokföring+Revision.pdf'},
        {file: '2012-08-12__In_ut_stat.pdf'},
        {file: '2012-08-12__Kallelse.pdf'},
        {file: '2012-08-12__Protokoll_Arsmote.pdf'},
        {file: '2012-08-12__Verksamhetsberättelse.pdf'},
        {file: '2013-08-18__Arsmote_Protokoll.pdf'},
        {file: '2013-08-18__In-ut_stat.pdf'},
        {file: '2013-08-18__Kallelse.pdf'},
        {file: '2013-08-18__Revisionsberättelse.pdf'},
        {file: '2013-08-18__verksamhetsberättelse.pdf'},
        {file: '2014-08-14__Revisionsberattelse.pdf'},
        {file: '2014-08-16__In_ut_stat.pdf'},
        {file: '2014-08-16__Kallelse.pdf'},
        {file: '2014-08-16__Protokoll_Arsstamma.pdf'},
        {file: '2014-08-16__Verksamhetsberattelse.pdf'},
        {file: '2015-08-15__In-Ut_stat.pdf'},
        {file: '2015-08-15__Kallelse.pdf'},
        {file: '2015-08-15__Protokoll_Arsstamma.pdf'},
        {file: '2015-08-15__Revisionsberättelse.pdf'},
        {file: '2015-08-15__Versksamhetsber.pdf'},
        {file: '2015-12-03__Skatteverket_beskattning.pdf'},
        {file: '2016-08-13__In_ut_stat1.pdf'},
        {file: '2016-08-13__Protokoll_Arsstämma.pdf'},
        {file: '2016-08-13__Revisionsberattelse.pdf'},
        {file: '2016-08-13__Verksamhetsberättelse.pdf'},
        {file: '2016-08-15__Kallelse.pdf'},
        {file: '2017-08-19__Kallelse.pdf'},
        {file: '2017-08-19__Revisionsberättelse.pdf'},
      ]
    },
  },
  dikning_kartor: {
    title: 'Kartor dikningsföretag',
    body: '<p><a href="res/static/Dikningsforetag/Asketorp_dikningsforetag1.jpg">Karta dikningsföretag</a></p>',
  },
  vag: {
    title: 'Asketorps Vägsamfällighet',
    body: '<p><strong>Organisationsnumme</strong>r 717910-1568</p><p><strong>Bankkonto</strong>: Handelsbanken 634 153 072, clearingnummer 6465.</p><p><strong>Ordförande</strong>: Jan Jacobson, Plankgatan 50, 602 19 Norrköping.<br /><strong>Sekreterare</strong>: Robert Jernlås, Borgviksvägen 2, 736 32 Kungsör<br /><strong>Kassör</strong>: Rikard Jernlås, Krikonstigen 5, 773 43  Ludvika</p>',
  },
  vag_deltagare: {
    title: 'Deltagarlängd vägsamfällighet',
    body: '<table><tbody><tr><td><strong>Asketorp 1:2</strong></td><td>34 %</td></tr><tr><td><strong>Asketorp 1:3</strong></td><td>57 %</td></tr><tr><td><strong>Asketorp 1:7</strong></td><td>3 %</td></tr><tr><td><strong>Asketorp 1:13</strong></td><td>3 %</td></tr><tr><td><strong>Asketorp 1:14</strong></td><td>1 %</td></tr><tr><td><strong>Asketorp 1:18</strong></td><td>1 %</td></tr><tr><td><strong>Asketorp 1:19</strong></td><td>1 %</td></tr></tbody></table>	',
  },
  vag_dokument: {
    title: 'Dokumentarkiv för Vägsamfälligheten',
    body: null,
    template: 'named-links-template',
    data: {
      path: 'res/dynamic/vagsamfallighet/',
      files: [
        {file: '1945-03-16__forrattningshandlingar.pdf'},
        {file: '2010-08-15__Protokoll.pdf'},
        {file: '2011-03-26__kallelse.pdf'},
        {file: '2011-03-26__motesprotokoll.pdf'},
        {file: '2011-08-20__Kallelse.pdf'},
        {file: '2011-08-20__Protokoll.pdf'},
        {file: '2011-08-20__STADGAR.pdf'},
        {file: '2011-08-20__Utgift-Inkomsstat.pdf'},
        {file: '2011-09-19__REGISTERUTDRAG.pdf'},
        {file: '2012-02-07__Tillsynsprotokoll.pdf'},
        {file: '2012-08-12__Forvaltningsberattelse.pdf'},
        {file: '2012-08-12__Kallelse.pdf'},
        {file: '2012-08-12__Kassarapport_02.pdf'},
        {file: '2012-08-12__Protokoll_Arsstamma.pdf'},
        {file: '2012-08-12__Protokoll_Styrelse.pdf'},
        {file: '2012-08-12__Revisionsberättelse.pdf'},
        {file: '2012-08-12__Utdebitering_beslut.pdf'},
        {file: '2012-08-12__Utdebitering-forslag.pdf'},
        {file: '2012-08-12__Utgift-Inkomststat.pdf'},
        {file: '2013-06-18__Kallelse.pdf'},
        {file: '2013-08-18__Protokoll_Arsstamma.pdf'},
        {file: '2013-08-18__Utdebiteringsforslag.pdf'},
        {file: '2013-08-18__Utgift-Inkomststat.pdf'},
        {file: '2013-08-18__Verksamhetsberattelse.pdf'},
        {file: '2014-08-16__Inkomst-utgiftsstat.pdf'},
        {file: '2014-08-16__Kallelse.pdf'},
        {file: '2014-08-16__Protokoll_Arsstamma.pdf'},
        {file: '2014-08-16__Utdebiteringsforslag.pdf'},
        {file: '2014-08-16__Verksamhetsberattelse.pdf'},
        {file: '2015-08-15__Arsstamma.pdf'},
        {file: '2015-08-15__Inkomst-Utgiftsstat.pdf'},
        {file: '2015-08-15__Kallelse.pdf'},
        {file: '2015-08-15__Verksamhetsber.pdf'},
        {file: '2016-08-13__Inkomst-Utgiftsstat.pdf'},
        {file: '2016-08-13__Kallelse.pdf'},
        {file: '2016-08-13__Protokoll_Arsstamma.pdf'},
      ]
    },
  },
  vag_kartor: {
    title: 'Kartor vägsamfällighet',
    body: '<p><a href="res/static/Vagsamfallighet/vagsam_karta1.jpg">Karta vägsamfällighet</a></p>	',
  },
};
