export interface Article {
  id: number;
  titleNumber: number;
  title: string;
  chapterNumber: number;
  chapter: string;
  articleNumber: number;
  content: string;
}

export const politicalConstitution: Article[] = [
  {
    id: 211,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 5,
    chapter: 'DE LA FUNCIÓN ADMINISTRATIVA',
    articleNumber: 211,
    content:
      'La ley señalará las funciones que el Presidente de la República podrá delegar en los ministros, directores de departamentos administrativos, representantes legales de entidades descentralizadas, superintendentes, gobernadores, alcaldes y agencias del Estado que la misma ley determine. Igualmente, fijará las condiciones para que las autoridades administrativas puedan delegar en sus subalternos o en otras autoridades. La delegación exime de responsabilidad al delegante, la cual corresponderá exclusivamente al delegatario, cuyos actos o resoluciones podrá siempre reformar o revocar aquel, reasumiendo la responsabilidad consiguiente. La ley establecerá los recursos que se pueden interponer contra los actos de los delegatarios.',
  },
  {
    id: 212,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 6,
    chapter: 'DE LOS ESTADOS DE EXCEPCIÓN',
    articleNumber: 212,
    content:
      'El Presidente de la República, con la firma de todos los ministros, podrá declarar el Estado de Guerra Exterior. Mediante tal declaración, el Gobierno tendrá las facultades estrictamente necesarias para repeler la agresión, defender la soberanía, atender los requerimientos de la guerra, y procurar el restablecimiento de la normalidad. La declaración del Estado de Guerra Exterior solo procederá una vez el Senado haya autorizado la declaratoria de guerra, salvo que a juicio del Presidente fuere necesario repeler la agresión. Mientras subsista el Estado de Guerra, el Congreso se reunirá con la plenitud de sus atribuciones constitucionales y legales, y el Gobierno le informará motivada y periódicamente sobre los decretos que haya dictado y la evolución de los acontecimientos. Los decretos legislativos que dicte el Gobierno suspenden las leyes incompatibles con el Estado de Guerra, rigen durante el tiempo que ellos mismos señalen y dejarán de tener vigencia tan pronto se declare restablecida la normalidad. El Congreso podrá, en cualquier época, reformarlos o derogarlos con el voto favorable de los dos tercios de los miembros de una y otra Cámara.',
  },
  {
    id: 213,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 6,
    chapter: 'DE LOS ESTADOS DE EXCEPCIÓN',
    articleNumber: 213,
    content:
      'En caso de grave perturbación del orden público que atente de manera inminente contra la estabilidad institucional, la seguridad del Estado, o la convivencia ciudadana, y que no pueda ser conjurada mediante el uso de las atribuciones ordinarias de las autoridades de Policía, el Presidente de la República, con la firma de todos los ministros, podrá declarar el Estado de Conmoción Interior, en toda la República o parte de ella, por término no mayor de noventa días, prorrogable hasta por dos períodos iguales, el segundo de los cuales requiere concepto previo y favorable del Senado de la República. Mediante tal declaración, el Gobierno tendrá las facultades estrictamente necesarias para conjurar las causas de la perturbación e impedir la extensión de sus efectos. Los decretos legislativos que dicte el Gobierno podrán suspender las leyes incompatibles con el Estado de Conmoción y dejarán de regir tan pronto como se declare restablecido el orden público. El Gobierno podrá prorrogar su vigencia hasta por noventa días más. Dentro de los tres días siguientes a la declaratoria o prórroga del Estado de Conmoción, el Congreso se reunirá por derecho propio, con la plenitud de sus atribuciones constitucionales y legales. El Presidente le pasará inmediatamente un informe motivado sobre las razones que determinaron la declaración. En ningún caso los civiles podrán ser investigados o juzgados por la justicia penal militar.',
  },
  {
    id: 214,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 6,
    chapter: 'DE LOS ESTADOS DE EXCEPCIÓN',
    articleNumber: 214,
    content:
      'Los Estados de Excepción a que se refieren los artículos anteriores se someterán a las siguientes disposiciones: 1. Los decretos legislativos llevarán la firma del Presidente de la República y todos sus ministros y solamente podrán referirse a materias que tengan relación directa y específica con la situación que hubiere determinado la declaratoria del Estado de Excepción. 2. No podrán suspenderse los derechos humanos ni las libertades fundamentales. En todo caso se respetarán las reglas del Derecho Internacional Humanitario. Una ley estatutaria regulará las facultades del Gobierno durante los estados de excepción y establecerá los controles judiciales y las garantías para proteger los derechos, de conformidad con los tratados internacionales. Las medidas que se adopten deberán ser proporcionales a la gravedad de los hechos. 3. No se interrumpirá el normal funcionamiento de las ramas del poder público ni de los órganos del Estado. 4. Tan pronto como hayan cesado la guerra exterior o las causas que dieron lugar al Estado de Conmoción Interior, el Gobierno declarará restablecido el orden público y levantará el Estado de Excepción. 5. El Presidente y los ministros serán responsables cuando declaren los estados de excepción sin haber ocurrido los casos de guerra exterior o de conmoción interior, y lo serán también, al igual que los demás funcionarios, por cualquier abuso que hubieren cometido en el ejercicio de las facultades a que se refieren los artículos anteriores. 6. El Gobierno enviará a la Corte Constitucional al día siguiente de su expedición, los decretos legislativos que dicte en uso de las facultades a que se refieren los artículos anteriores, para que aquella decida definitivamente sobre su constitucionalidad. Si el Gobierno no cumpliere con el deber de enviarlos, la Corte Constitucional aprehenderá de oficio y en forma inmediata su conocimiento.',
  },
  {
    id: 215,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 6,
    chapter: 'DE LOS ESTADOS DE EXCEPCIÓN',
    articleNumber: 215,
    content:
      'Cuando sobrevengan hechos distintos de los previstos en los artículos 212 y 213 que perturben o amenacen perturbar en forma grave e inminente el orden económico, social y ecológico del país, o que constituyan grave calamidad pública, podrá el Presidente, con la firma de todos los ministros, declarar el Estado de Emergencia por períodos hasta de treinta días en cada caso, que sumados no podrán exceder de noventa días en el año calendario. Mediante tal declaración, que deberá ser motivada, podrá el Presidente, con la firma de todos los ministros, dictar decretos con fuerza de ley, destinados exclusivamente a conjurar la crisis y a impedir la extensión de sus efectos. Estos decretos deberán referirse a materias que tengan relación directa y específica con el Estado de Emergencia, y podrán, en forma transitoria, establecer nuevos tributos o modificar los existentes. En estos últimos casos, las medidas dejarán de regir al término de la siguiente vigencia fiscal, salvo que el Congreso, durante el año siguiente, les otorgue carácter permanente. El Gobierno, en el decreto que declare el Estado de Emergencia, señalará el término dentro del cual va a hacer uso de las facultades extraordinarias a que se refiere este artículo, y convocará al Congreso, si este no se hallare reunido, para los diez días siguientes al vencimiento de dicho término. El Congreso examinará hasta por un lapso de treinta días, prorrogable por acuerdo de las dos Cámaras, el informe motivado que le presente el Gobierno sobre las causas que determinaron el Estado de Emergencia y las medidas adoptadas, y se pronunciará expresamente sobre la conveniencia y oportunidad de las mismas. El Congreso, durante el año siguiente a la declaratoria de la emergencia, podrá derogar, modificar o adicionar los decretos a que se refiere este artículo, en aquellas materias que ordinariamente son de iniciativa del Gobierno. En relación con aquellas que son de iniciativa de sus miembros, el Congreso podrá ejercer dichas atribuciones en todo tiempo. El Congreso, si no fuere convocado, se reunirá por derecho propio, en las condiciones y para los efectos previstos en este artículo. El Presidente de la República y los ministros serán responsables cuando declaren el Estado de Emergencia sin haberse presentado alguna de las circunstancias previstas en el inciso 1°, y lo serán también por cualquier abuso cometido en el ejercicio de las facultades que la Constitución otorga al Gobierno durante la emergencia. El Gobierno no podrá desmejorar los derechos sociales de los trabajadores mediante los decretos contemplados en este artículo. Parágrafo. El Gobierno enviará a la Corte Constitucional al día siguiente de su expedición los decretos legislativos que dicte en uso de las facultades a que se refiere este artículo, para que aquella decida sobre su constitucionalidad. Si el Gobierno no cumpliere con el deber de enviarlos, la Corte Constitucional aprehenderá de oficio y en forma inmediata su conocimiento.',
  },
  {
    id: 216,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 7,
    chapter: 'DE LA FUERZA PÚBLICA',
    articleNumber: 216,
    content:
      'La fuerza pública estará integrada en forma exclusiva por las Fuerzas Militares y la Policía Nacional. Todos los colombianos están obligados a tomar las armas cuando las necesidades públicas lo exijan para defender la independencia nacional y las instituciones públicas. La Ley determinará las condiciones que en todo tiempo eximen del servicio militar y las prerrogativas por la prestación del mismo',
  },
  {
    id: 217,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 7,
    chapter: 'DE LA FUERZA PÚBLICA',
    articleNumber: 217,
    content:
      'La nación tendrá para su defensa unas fuerzas militares permanentes constituidas por el Ejército, la Armada y la Fuerza Aérea. Las fuerzas militares tendrán como finalidad primordial la defensa de la soberanía, la independencia, la integridad del territorio nacional y del orden constitucional. La ley determinará el sistema de reemplazos en las fuerzas militares, así como los ascensos, derechos y obligaciones de sus miembros y el régimen especial de carrera, prestacional y disciplinario, que les es propio.',
  },
  {
    id: 218,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 7,
    chapter: 'DE LA FUERZA PÚBLICA',
    articleNumber: 218,
    content:
      'La ley organizará el cuerpo de Policía. La Policía Nacional es un cuerpo armado permanente de naturaleza civil, a cargo de la nación, cuyo fin primordial es el mantenimiento de las condiciones necesarias para el ejercicio de los derechos y libertades públicas, y para asegurar que los habitantes de Colombia convivan en paz. La ley determinará su régimen de carrera, prestacional y disciplinario.',
  },
  {
    id: 219,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 7,
    chapter: 'DE LA FUERZA PÚBLICA',
    articleNumber: 219,
    content:
      'La Fuerza Pública no es deliberante; no podrá reunirse sino por orden de autoridad legítima, ni dirigir peticiones, excepto sobre asuntos que se relacionen con el servicio y la moralidad del respectivo cuerpo y con arreglo a la ley. Los miembros de la Fuerza Pública no podrán ejercer la función del sufragio mientras permanezcan en servicio activo, ni intervenir en actividades o debates de partidos o movimientos políticos.',
  },
  {
    id: 220,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 7,
    chapter: 'DE LA FUERZA PÚBLICA',
    articleNumber: 220,
    content:
      'Los miembros de la Fuerza Pública no pueden ser privados de sus grados, honores y pensiones, sino en los casos y del modo que determine la Ley.',
  },
  {
    id: 221,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 7,
    chapter: 'DE LA FUERZA PÚBLICA',
    articleNumber: 221,
    content:
      'Acto Legislativo 01 de 2015, artículo 1°. El artículo 221 de la Constitución Política quedará así: De las conductas punibles cometidas por los miembros de la Fuerza Pública en servicio activo, y en relación con el mismo servicio, conocerán las cortes marciales o tribunales militares, con arreglo a las prescripciones del Código Penal Militar. Tales Cortes o Tribunales estarán integrados por miembros de la Fuerza Pública en servicio activo o en retiro. En la investigación y juzgamiento de las conductas punibles de los miembros de la Fuerza Pública, en relación con un conflicto armado o un enfrentamiento que reúna las condiciones objetivas del Derecho Internacional Humanitario, se aplicarán las normas y principios de este. Los jueces y fiscales de la justicia ordinaria y de la Justicia Penal Militar o Policial que conozcan de las conductas de los miembros de la Fuerza Pública deberán tener formación y conocimiento adecuado del Derecho Internacional Humanitario. La Justicia Penal Militar o Policial será independiente del mando de la Fuerza Pública.',
  },
  {
    id: 222,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 7,
    chapter: 'DE LA FUERZA PÚBLICA',
    articleNumber: 222,
    content:
      'La ley determinará los sistemas de promoción profesional, cultural y social de los miembros de la Fuerza Pública. En las etapas de su formación, se les impartirá la enseñanza de los fundamentos de la democracia y de los derechos humanos.',
  },
  {
    id: 223,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 7,
    chapter: 'DE LA FUERZA PÚBLICA',
    articleNumber: 223,
    content:
      'Solo el Gobierno puede introducir y fabricar armas, municiones de guerra y explosivos. Nadie podrá poseerlos ni portarlos sin permiso de la autoridad competente. Este permiso no podrá extenderse a los casos de concurrencia a reuniones políticas, a elecciones, o a sesiones de corporaciones públicas o asambleas, ya sea para actuar en ellas o para presenciarlas. Los miembros de los organismos nacionales de seguridad y otros cuerpos oficiales armados, de carácter permanente creados o autorizados por la ley, podrán portar armas bajo el control del Gobierno, de conformidad con los principios y procedimientos que aquella señale.',
  },
  {
    id: 224,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 8,
    chapter: 'DE LAS RELACIONES INTERNACIONALES',
    articleNumber: 224,
    content:
      'Los tratados, para su validez, deberán ser aprobados por el Congreso. Sin embargo, el Presidente de la República podrá dar aplicación provisional a los tratados de naturaleza económica y comercial acordados en el ámbito de organismos internacionales, que así lo dispongan. En este caso tan pronto como un tratado entre en vigor provisionalmente, deberá enviarse al Congreso para su aprobación. Si el Congreso no lo aprueba, se suspenderá la aplicación del tratado.',
  },
  {
    id: 225,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 8,
    chapter: 'DE LAS RELACIONES INTERNACIONALES',
    articleNumber: 225,
    content:
      'La Comisión Asesora de Relaciones Exteriores, cuya composición será determinada por la ley, es cuerpo consultivo del Presidente de la República.',
  },
  {
    id: 226,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 8,
    chapter: 'DE LAS RELACIONES INTERNACIONALES',
    articleNumber: 226,
    content:
      'El Estado promoverá la internacionalización de las relaciones políticas, económicas, sociales y ecológicas sobre bases de equidad, reciprocidad y conveniencia nacional.',
  },
  {
    id: 227,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 8,
    chapter: 'DE LAS RELACIONES INTERNACIONALES',
    articleNumber: 227,
    content:
      'El Estado promoverá la integración económica, social y política con las demás naciones y especialmente, con los países de América Latina y del Caribe mediante la celebración de tratados que sobre bases de equidad, igualdad y reciprocidad, creen organismos supranacionales, inclusive para conformar una comunidad latinoamericana de naciones. La ley podrá establecer elecciones directas para la constitución del Parlamento Andino y del Parlamento Latinoamericano.',
  },
  {
    id: 228,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 228,
    content:
      'La Administración de Justicia es función pública. Sus decisiones son independientes. Las actuaciones serán públicas y permanentes con las excepciones que establezca la ley y en ellas prevalecerá el derecho sustancial. Los términos procesales se observarán con diligencia y su incumplimiento será sancionado. Su funcionamiento será desconcentrado y autónomo.',
  },
  {
    id: 229,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 229,
    content:
      'Se garantiza el derecho de toda persona para acceder a la administración de justicia. La ley indicará en qué casos podrá hacerlo sin la representación de abogado.',
  },
  {
    id: 230,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 230,
    content:
      'Los jueces, en sus providencias, solo están sometidos al imperio de la ley. La equidad, la jurisprudencia, los principios generales del derecho y la doctrina son criterios auxiliares de la actividad judicial.',
  },
  {
    id: 231,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 231,
    content:
      'Acto Legislativo 02 de 2015. Artículo 11. El artículo 231 de la Constitución Política quedará así: Los Magistrados de la Corte Suprema de Justicia y del Consejo de Estado serán elegidos por la respectiva Corporación, previa audiencia pública, de lista de diez elegibles enviada por el Consejo de Gobierno Judicial tras una convocatoria pública reglada de conformidad con la ley y adelantada por la Gerencia de la Rama Judicial. En el conjunto de procesos de selección de los Magistrados de la Corte Suprema de Justicia y del Consejo de Estado se atenderá el criterio de equilibrio entre quienes provienen del ejercicio profesional, de la Rama Judicial y de la academia. La Corte Suprema de Justicia y el Consejo de Estado reglamentarán la fórmula de votación y el término en el cual deberán elegir a los Magistrados que conformen la respectiva corporación.',
  },
  {
    id: 232,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 232,
    content:
      'Para ser Magistrado de la Corte Constitucional, de la Corte Suprema de Justicia y del Consejo de Estado se requiere: 1. Ser colombiano de nacimiento y ciudadano en ejercicio. 2. Ser abogado. 3. No haber sido condenado por sentencia judicial a pena privativa de la libertad, excepto por delitos políticos o culposos. 4. Acto Legislativo 02 de 2015, artículo 12. Modifíquese el numeral 4 del artículo 232 de la Constitución Política, el cual quedará así: Haber desempeñado, durante quince años, cargos en la Rama Judicial o en el Ministerio Público, o haber ejercido, con buen crédito, por el mismo tiempo, la profesión de abogado o la cátedra universitaria en disciplinas jurídicas en establecimientos reconocidos oficialmente. Para el cargo de Magistrado de la Corte Suprema de Justicia y del Consejo de Estado, la cátedra universitaria deberá haber sido ejercida en disciplinas jurídicas relacionadas con el área de la magistratura a ejercer. Parágrafo. Para ser Magistrado de estas corporaciones no será requisito pertenecer a la carrera judicial.',
  },
  {
    id: 233,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 233,
    content:
      'Los Magistrados de la Corte Constitucional, de la Corte Suprema de Justicia, y del Consejo de Estado serán elegidos para un período de ocho años, no podrán ser reelegidos y permanecerán en el ejercicio de sus cargos mientras observen buena conducta, tengan rendimiento satisfactorio y no hayan llegado a edad de retiro forzoso.',
  },
  {
    id: 234,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 2,
    chapter: 'DE LA JURISDICCIÓN ORDINARIA',
    articleNumber: 234,
    content:
      'La Corte Suprema de Justicia es el máximo tribunal de la jurisdicción ordinaria y se compondrá del número impar de magistrados que determine la ley. Esta dividirá la Corte en salas, señalará a cada una de ellas los asuntos que deba conocer separadamente y determinará aquellos en que deba intervenir la Corte en pleno',
  },
  {
    id: 235,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 2,
    chapter: 'DE LA JURISDICCIÓN ORDINARIA',
    articleNumber: 235,
    content:
      'Son atribuciones de la Corte Suprema de Justicia: 1. Actuar como tribunal de casación. 2. Juzgar al Presidente de la República o a quien haga sus veces y a los altos funcionarios de que trata el artículo 174, por cualquier hecho punible que se les impute, conforme al artículo 175 numerales 2 y 3. 3. Investigar y juzgar a los miembros del Congreso. 4. Acto Legislativo 02 de 2015, artículo 13. El numeral 4 del artículo 235 de la Constitución Política quedará así: 4. Juzgar, previa acusación del Fiscal General de la Nación, del Vicefiscal General de la Nación o de sus delegados de la Unidad de Fiscalías ante la Corte Suprema de Justicia, al Vicepresidente de la República, a los Ministros del Despacho, al Procurador General, al Defensor del Pueblo, a los Agentes del Ministerio Público ante la Corte, ante el Consejo de Estado y ante los Tribunales; a los Directores de los Departamentos Administrativos, al Contralor General de la República, a los Embajadores y jefe de misión diplomática o consular, a los Gobernadores, a los Magistrados de Tribunales y a los Generales y Almirantes de la Fuerza Pública, por los hechos punibles que se les imputen. 5. Conocer de todos los negocios contenciosos de los agentes diplomáticos acreditados ante el Gobierno de la nación, en los casos previstos por el Derecho Internacional. 6. Darse su propio reglamento. 7. Las demás atribuciones que señale la ley. Parágrafo. Cuando los funcionarios antes enumerados hubieren cesado en el ejercicio de su cargo, el fuero solo se mantendrá para las conductas punibles que tengan relación con las funciones desempeñadas.',
  },
  {
    id: 236,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 3,
    chapter: 'DE LA JURISDICCIÓN CONTENCIOSO ADMINISTRATIVA',
    articleNumber: 236,
    content:
      'El Consejo de Estado tendrá el número impar de Magistrados que determine la ley. El Consejo se dividirá en salas y secciones para separar las funciones jurisdiccionales de las demás que le asignen la Constitución y la ley. La ley señalará las funciones de cada una de las salas y secciones, el número de magistrados que deban integrarlas y su organización interna.',
  },
  {
    id: 237,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 3,
    chapter: 'DE LA JURISDICCIÓN CONTENCIOSO ADMINISTRATIVA',
    articleNumber: 237,
    content:
      'Son atribuciones del Consejo de Estado: 1. Desempeñar las funciones de tribunal supremo de lo contencioso administrativo, conforme a las reglas que señale la ley. 2. Conocer de las acciones de nulidad por inconstitucionalidad de los decretos dictados por el Gobierno nacional, cuya competencia no corresponda a la Corte Constitucional. 3. Actuar como cuerpo supremo consultivo del Gobierno en asuntos de administración, debiendo ser necesariamente oído en todos aquellos casos que la Constitución y las leyes determinen. En los casos de tránsito de tropas extranjeras por el territorio nacional, de estación o tránsito de buques o aeronaves extranjeros de guerra, en aguas o en territorio o en espacio aéreo de la nación, el gobierno debe oír previamente al Consejo de Estado. 4. Preparar y presentar proyectos de actos reformatorios de la Constitución y proyectos de ley. 5. Conocer de los casos sobre pérdida de la investidura de los congresistas, de conformidad con esta Constitución y la ley. 6. Darse su propio reglamento y ejercer las demás funciones que determine la ley. 7. Acto Legislativo 01 de 2009, artículo 8°. Artículo corregido por el artículo 1° del Decreto 3259 de 2009. El nuevo texto es el siguiente: Artículo 8°. El artículo 237 de la Constitución Política tendrá un nuevo numeral, así: Conocer de la acción de nulidad electoral con sujeción a las reglas de competencia establecidas en la ley. Parágrafo. Para ejercer el Contencioso Electoral ante la Jurisdicción Administrativa contra el acto de elección de carácter popular cuando la demanda se fundamente en causales de nulidad por irregularidades en el proceso de votación y en el escrutinio, es requisito de procedibilidad someterlas, antes de la declaratoria de elección, a examen de la autoridad administrativa correspondiente, que encabeza el Consejo Nacional Electoral.',
  },
  {
    id: 238,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 3,
    chapter: 'DE LA JURISDICCIÓN CONTENCIOSO ADMINISTRATIVA',
    articleNumber: 238,
    content:
      'La jurisdicción de lo contencioso administrativo podrá suspender provisionalmente, por los motivos y con los requisitos que establezca la ley, los efectos de los actos administrativos que sean susceptibles de impugnación por vía judicial.',
  },
  {
    id: 239,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 4,
    chapter: 'DE LA JURISDICCIÓN CONSTITUCIONAL',
    articleNumber: 239,
    content:
      'La Corte Constitucional tendrá el número impar de miembros que determine la ley. En su integración se atenderá el criterio de designación de magistrados pertenecientes a diversas especialidades del Derecho. Los Magistrados de la Corte Constitucional serán elegidos por el Senado de la República para períodos individuales de ocho años, de sendas ternas que le presenten el Presidente de la República, la Corte Suprema de Justicia y el Consejo de Estado. Los Magistrados de la Corte Constitucional no podrán ser reelegidos.',
  },
  {
    id: 240,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 4,
    chapter: 'DE LA JURISDICCIÓN CONSTITUCIONAL',
    articleNumber: 240,
    content:
      'No podrán ser elegidos Magistrados de la Corte Constitucional quienes durante el año anterior a la elección se hayan desempeñado como Ministros del Despacho o Magistrados de la Corte Suprema de Justicia o del Consejo de Estado.',
  },
  {
    id: 7,
    titleNumber: 1,
    title: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    chapterNumber: 1,
    chapter: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    articleNumber: 7,
    content:
      'El Estado reconoce y protege la diversidad étnica y cultural de la nación colombiana',
  },
  {
    id: 241,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 4,
    chapter: 'DE LA JURISDICCIÓN CONSTITUCIONAL',
    articleNumber: 241,
    content:
      'A la Corte Constitucional se le confía la guarda de la integridad y supremacía de la Constitución, en los estrictos y precisos términos de este artículo. Con tal fin, cumplirá las siguientes funciones: 1. Decidir sobre las demandas de inconstitucionalidad que promuevan los ciudadanos contra los actos reformatorios de la Constitución, cualquiera que sea su origen, solo por vicios de procedimiento en su formación. 2. Decidir, con anterioridad al pronunciamiento popular, sobre la constitucionalidad de la convocatoria a un referendo o a una Asamblea Constituyente para reformar la Constitución, solo por vicios de procedimiento en su formación. 3. Decidir sobre la constitucionalidad de los referendos sobre leyes y de las consultas populares y plebiscitos del orden nacional. Estos últimos solo por vicios de procedimiento en su convocatoria y realización. 4. Decidir sobre las demandas de inconstitucionalidad que presenten los ciudadanos contra las leyes, tanto por su contenido material como por vicios de procedimiento en su formación. 5. Decidir sobre las demandas de inconstitucionalidad que presenten los ciudadanos contra los decretos con fuerza de ley dictados por el Gobierno con fundamento en los artículos 150 numeral 10 y 341 de la Constitución, por su contenido material o por vicios de procedimiento en su formación. 6. Decidir sobre las excusas de que trata el artículo 137 de la Constitución. 7. Decidir definitivamente sobre la constitucionalidad de los decretos legislativos que dicte el Gobierno con fundamento en los artículos 212, 213 y 215 de la Constitución. 8. Decidir definitivamente sobre la constitucionalidad de los proyectos de ley que hayan sido objetados por el Gobierno como inconstitucionales, y de los proyectos de leyes estatutarias, tanto por su contenido material como por vicios de procedimiento en su formación. 9. Revisar, en la forma que determine la ley, las decisiones judiciales relacionadas con la acción de tutela de los derechos constitucionales. 10. Decidir definitivamente sobre la exequibilidad de los tratados internacionales y de las leyes que los aprueben. Con tal fin, el Gobierno los remitirá a la Corte, dentro de los seis días siguientes a la sanción de la ley. Cualquier ciudadano podrá intervenir para defender o impugnar su constitucionalidad. Si la Corte los declara constitucionales, el Gobierno podrá efectuar el canje de notas; en caso contrario no serán ratificados. Cuando una o varias normas de un tratado multilateral sean declaradas inexequibles por la Corte Constitucional, el Presidente de la República solo podrá manifestar el consentimiento formulando la correspondiente reserva. 11. Acto Legislativo 02 de 2015, artículo 14. Agréguese un numeral 12 y modifíquese el 11 del artículo 241 de la Constitución Política, los cuales quedarán así: 11. Dirimir los conflictos de competencia que ocurran entre las distintas jurisdicciones. 12. Darse su propio reglamento. Parágrafo. Cuando la Corte encuentre vicios de procedimiento subsanables en la formación del acto sujeto a su control, ordenará devolverlo a la autoridad que lo profirió para que, de ser posible, enmiende el defecto observado. Subsanado el vicio, procederá a decidir sobre la exequibilidad del acto.',
  },
  {
    id: 242,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 4,
    chapter: 'DE LA JURISDICCIÓN CONSTITUCIONAL',
    articleNumber: 242,
    content:
      'Los procesos que se adelanten ante la Corte Constitucional en las materias a que se refiere este título, serán regulados por la ley conforme a las siguientes disposiciones: 1. Cualquier ciudadano podrá ejercer las acciones públicas previstas en el artículo precedente, e intervenir como impugnador o defensor de las normas sometidas a control en los procesos promovidos por otros, así como en aquellos para los cuales no existe acción pública. 2. El Procurador General de la Nación deberá intervenir en todos los procesos. 3. Las acciones por vicios de forma caducan en el término de un año, contado desde la publicación del respectivo acto. 4. De ordinario, la Corte dispondrá del término de sesenta días para decidir, y el Procurador General de la Nación, de treinta para rendir concepto. 5. En los procesos a que se refiere el numeral 7 del artículo anterior, los términos ordinarios se reducirán a una tercera parte y su incumplimiento es causal de mala conducta, que será sancionada conforme a la ley.',
  },
  {
    id: 243,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 4,
    chapter: 'DE LA JURISDICCIÓN CONSTITUCIONAL',
    articleNumber: 243,
    content:
      'Los fallos que la Corte dicte en ejercicio del control jurisdiccional hacen tránsito a cosa juzgada constitucional.Ninguna autoridad podrá reproducir el contenido material del acto jurídico declarado inexequible por razones de fondo, mientras subsistan en la Carta las disposiciones que sirvieron para hacer la confrontación entre la norma ordinaria y la Constitución',
  },
  {
    id: 244,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 4,
    chapter: 'DE LA JURISDICCIÓN CONSTITUCIONAL',
    articleNumber: 244,
    content:
      'La Corte Constitucional comunicará al Presidente de la República o al Presidente del Congreso, según el caso, la iniciación de cualquier proceso que tenga por objeto el examen de constitucionalidad de normas dictadas por ellos. Esta comunicación no dilatará los términos del proceso',
  },
  {
    id: 245,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 4,
    chapter: 'DE LA JURISDICCIÓN CONSTITUCIONAL',
    articleNumber: 245,
    content:
      'El Gobierno no podrá conferir empleo a los Magistrados de la Corte Constitucional durante el período de ejercicio de sus funciones ni dentro del año siguiente a su retiro.',
  },
  {
    id: 246,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 5,
    chapter: 'DE LAS JURISDICCIONES ESPECIALES',
    articleNumber: 246,
    content:
      'Las autoridades de los pueblos indígenas podrán ejercer funciones jurisdiccionales dentro de su ámbito territorial, de conformidad con sus propias normas y procedimientos, siempre que no sean contrarios a la Constitución y leyes de la República. La ley establecerá las formas de coordinación de esta jurisdicción especial con el sistema judicial nacional.',
  },
  {
    id: 247,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 5,
    chapter: 'DE LAS JURISDICCIONES ESPECIALES',
    articleNumber: 247,
    content:
      'La ley podrá crear jueces de paz encargados de resolver en equidad conflictos individuales y comunitarios. También podrá ordenar que se elijan por votación popular.',
  },
  {
    id: 248,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 5,
    chapter: 'DE LAS JURISDICCIONES ESPECIALES',
    articleNumber: 248,
    content:
      'Únicamente las condenas proferidas en sentencias judiciales en forma definitiva tienen la calidad de antecedentes penales y contravencionales en todos los órdenes legales.',
  },
  {
    id: 249,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 6,
    chapter: 'DE LA FISCALÍA GENERAL DE LA NACIÓN',
    articleNumber: 249,
    content:
      'La Fiscalía General de la Nación estará integrada por el Fiscal General, los fiscales delegados y los demás funcionarios que determine la ley. El Fiscal General de la Nación será elegido para un período de cuatro años por la Corte Suprema de Justicia, de terna enviada por el Presidente de la República y no podrá ser reelegido. Debe reunir las mismas calidades exigidas para ser Magistrado de la Corte Suprema de Justicia. La Fiscalía General de la Nación forma parte de la rama judicial y tendrá autonomía administrativa y presupuestal.',
  },
  {
    id: 250,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 6,
    chapter: 'DE LA FISCALÍA GENERAL DE LA NACIÓN',
    articleNumber: 250,
    content:
      'Acto Legislativo 03 de 2002, artículo 2°. El artículo 250 de la Constitución Política quedará así: La Fiscalía General de la Nación está obligada a adelantar el ejercicio de la acción penal y realizar la investigación de los hechos que revistan las características de un delito que lleguen a su conocimiento por medio de denuncia, petición especial, querella o de oficio, siempre y cuando medien suficientes motivos y circunstancias fácticas que indiquen la posible existencia del mismo. No podrá, en consecuencia, suspender, interrumpir, ni renunciar a la persecución penal, salvo en los casos que establezca la ley para la aplicación del principio de oportunidad regulado dentro del marco de la política criminal del Estado, el cual estará sometido al control de legalidad por parte del juez que ejerza las funciones de control de garantías. Se exceptúan los delitos cometidos por Miembros de la Fuerza Pública en servicio activo y en relación con el mismo servicio. En ejercicio de sus funciones la Fiscalía General de la Nación, deberá: 1. Solicitar al juez que ejerza las funciones de control de garantías las medidas necesarias que aseguren la comparecencia de los imputados al proceso penal, la conservación de la prueba y la protección de la comunidad, en especial, de las víctimas. El juez que ejerza las funciones de control de garantías, no podrá ser, en ningún caso, el juez de conocimiento, en aquellos asuntos en que haya ejercido esta función. La ley podrá facultar a la Fiscalía General de la Nación para realizar excepcionalmente capturas; igualmente, la ley fijará los límites y eventos en que proceda la captura. En estos casos el juez que cumpla la función de control de garantías lo realizará a más tardar dentro de las treinta y seis (36) horas siguientes. 2. Adelantar registros, allanamientos, incautaciones e interceptaciones de comunicaciones. En estos eventos el juez que ejerza las funciones de control de garantías efectuará el control posterior respectivo, a más tardar dentro de las treinta y seis (36) horas siguientes. 3. Asegurar los elementos materiales probatorios, garantizando la cadena de custodia mientras se ejerce su contradicción. En caso de requerirse medidas adicionales que impliquen afectación de derechos fundamentales, deberá obtenerse la respectiva autorización por parte del juez que ejerza las funciones de control de garantías para poder proceder a ello. 4. Presentar escrito de acusación ante el juez de conocimiento, con el fin de dar inicio a un juicio público, oral, con inmediación de las pruebas, contradictorio, concentrado y con todas las garantías. 5. Solicitar ante el juez de conocimiento la preclusión de las investigaciones cuando según lo dispuesto en la ley no hubiere mérito para acusar. 6. Solicitar ante el juez de conocimiento las medidas judiciales necesarias para la asistencia a las víctimas, lo mismo que disponer el restablecimiento del derecho y la reparación integral a los afectados con el delito. 7. Velar por la protección de las víctimas, los jurados, los testigos y demás intervinientes en el proceso penal, la ley fijará los términos en que podrán intervenir las víctimas en el proceso penal y los mecanismos de justicia restaurativa. 8. Dirigir y coordinar las funciones de Policía Judicial que en forma permanente cumple la Policía Nacional y los demás organismos que señale la ley. 9. Cumplir las demás funciones que establezca la ley. El Fiscal General y sus delegados tienen competencia en todo el territorio nacional. En el evento de presentarse escrito de acusación, el Fiscal General o sus delegados deberán suministrar, por conducto del juez de conocimiento, todos los elementos probatorios e informaciones de que tenga noticia, incluidos los que le sean favorables al procesado. Parágrafo 1°. La Procuraduría General de la Nación continuará cumpliendo en el nuevo sistema de indagación, investigación y juzgamiento penal, las funciones contempladas en el artículo 277 de la Constitución Nacional. Parágrafo 2°. Acto Legislativo 06 de 2011, artículo 2°. El artículo 250 de la Constitución Política tendrá un parágrafo 2° del siguiente tenor: Decreto 379 de 2012. Artículo 1°. Corríjase el artículo 2° del Acto Legislativo número 6 de 2011, el cual quedará así: “Artículo 2°. El artículo 250 de la Constitución Política tendrá un parágrafo 2° del siguiente tenor: Atendiendo la naturaleza del bien jurídico o la menor lesividad de la conducta punible, el legislador podrá asignarle el ejercicio de la acción penal a la víctima o a otras autoridades distintas a la Fiscalía General de la Nación. En todo caso, la Fiscalía General de la Nación podrá actuar en forma preferente.',
  },
  {
    id: 251,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 6,
    chapter: 'DE LA FISCALÍA GENERAL DE LA NACIÓN',
    articleNumber: 251,
    content:
      'Acto Legislativo 03 de 2002, artículo 3°. El artículo 251 de la Constitución Política quedará así: Son funciones especiales del Fiscal General de la Nación: 1. Acto Legislativo 06 de 2011, artículo 3°. El numeral 1 del artículo 251 de la Constitución Política quedará así: Investigar y acusar, si hubiere lugar, directamente o por conducto del Vicefiscal General de la Nación o de sus delegados de la unidad de fiscalías ante la Corte Suprema de Justicia, a los altos servidores que gocen de fuero constitucional, con las excepciones previstas en la Constitución. 2. Nombrar y remover, de conformidad con la ley, a los servidores bajo su dependencia. 3. Asumir directamente las investigaciones y procesos, cualquiera que sea el estado en que se encuentren, lo mismo que asignar y desplazar libremente a sus servidores en las investigaciones y procesos. Igualmente, en virtud de los principios de unidad de gestión y de jerarquía, determinar el criterio y la posición que la Fiscalía deba asumir, sin perjuicio de la autonomía de los fiscales delegados en los términos y condiciones fijados por la ley. 4. Participar en el diseño de la política del Estado en materia criminal y presentar proyectos de ley al respecto. 5. Otorgar atribuciones transitorias a entes públicos que puedan cumplir funciones de Policía Judicial, bajo la responsabilidad y dependencia funcional de la Fiscalía General de la Nación. 6. Suministrar al Gobierno información sobre las investigaciones que se estén adelantando, cuando sea necesaria para la preservación del orden público',
  },
  {
    id: 252,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 6,
    chapter: 'DE LA FISCALÍA GENERAL DE LA NACIÓN',
    articleNumber: 252,
    content:
      'Aun durante los Estados de Excepción de que trata la Constitución en sus artículos 212 y 213, el Gobierno no podrá suprimir, ni modificar los organismos ni las funciones básicas de acusación y juzgamiento.',
  },
  {
    id: 253,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 6,
    chapter: 'DE LA FISCALÍA GENERAL DE LA NACIÓN',
    articleNumber: 253,
    content:
      'La ley determinará lo relativo a la estructura y funcionamiento de la Fiscalía General de la Nación, al ingreso por carrera y al retiro del servicio, a las inhabilidades e incompatibilidades, denominación, calidades, remuneración, prestaciones sociales y régimen disciplinario de los funcionarios y empleados de su dependencia',
  },
  {
    id: 254,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 7,
    chapter: 'GOBIERNO Y ADMINISTRACIÓN DE LA RAMA JUDICIAL',
    articleNumber: 254,
    content:
      'Acto Legislativo 02 de 2015, artículo 15. El artículo 254 de la Constitución Política quedará así: El Gobierno y la administración de la Rama Judicial estarán a cargo del Consejo de Gobierno Judicial y la Gerencia de la Rama Judicial. Estos órganos ejercerán las funciones que les atribuya la ley con el fin de promover el acceso a la justicia, la eficiencia de la Rama Judicial, la tutela judicial efectiva y la independencia judicial. El Consejo de Gobierno Judicial es el órgano encargado de definir las políticas de la Rama Judicial de acuerdo con la ley y postular las listas y ternas de candidatos que la Constitución le ordene. También corresponde al Consejo de Gobierno Judicial regular los trámites judiciales y administrativos que se adelanten en los despachos judiciales, en los aspectos no previstos por el legislador; expedir el reglamento del sistema de carrera judicial y de la Comisión de Carrera Judicial, cuya función será la vigilancia y control de la carrera; aprobar el proyecto de presupuesto de la Rama Judicial que deberá ser remitido al Gobierno; aprobar el mapa judicial; definir la estructura orgánica de la Gerencia de la Rama Judicial; supervisar a esta entidad, y rendir cuentas por su desempeño ante el Congreso de la República. El Consejo de Gobierno Judicial estará integrado por nueve miembros: los Presidentes de la Corte Constitucional, de la Corte Suprema de Justicia y del Consejo de Estado; el gerente de la Rama Judicial, quien deberá ser profesional con veinte años de experiencia, de los cuales diez deberán ser en administración de empresas o en entidades públicas, y será nombrado por el Consejo de Gobierno Judicial para un período de cuatro años; un representante de los magistrados de los Tribunales y de los jueces, elegido por ellos para un periodo de cuatro años; un representante de los empleados de la Rama Judicial elegido por estos para un periodo de cuatro años; tres miembros permanentes de dedicación exclusiva, nombrados por los demás miembros del Consejo de Gobierno Judicial, para un período de cuatro años. Ninguno de los miembros del Consejo de Gobierno Judicial podrá ser reelegido. Los miembros permanentes de dedicación exclusiva mencionados en el inciso anterior estarán encargados de la planeación estratégica de la Rama Judicial y de proponer al Consejo de Gobierno Judicial, para su aprobación, las políticas públicas de la Rama Judicial. Deberán tener diez años de experiencia en diseño, evaluación o seguimiento de políticas públicas, modelos de gestión o administración pública. En su elección se deberá asegurar la diversidad de perfiles académicos y profesionales. La ley estatutaria podrá determinar los temas específicos para los cuales los ministros del despacho, los directores de departamento administrativo, el Fiscal General de la Nación, así como representantes de académicos y de los abogados litigantes participarán en las reuniones del Consejo de Gobierno Judicial.',
  },
  {
    id: 255,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 7,
    chapter: 'GOBIERNO Y ADMINISTRACIÓN DE LA RAMA JUDICIAL',
    articleNumber: 255,
    content:
      'Acto Legislativo 02 de 2015, artículo 16. El artículo 255 de la Constitución Política quedará así: La Gerencia de la Rama Judicial es un órgano subordinado al Consejo de Gobierno Judicial y estará organizada de acuerdo con el principio de desconcentración territorial. La Gerencia de la Rama Judicial es la encargada de ejecutar las decisiones del Consejo de Gobierno Judicial, proveer apoyo administrativo y logístico a este órgano, administrar la Rama Judicial, elaborar para aprobación del Consejo de Gobierno Judicial el proyecto de presupuesto que deberá ser remitido al Gobierno, y ejecutarlo de conformidad con la aprobación que haga el Congreso, elaborar planes y programas para aprobación del Consejo de Gobierno Judicial, formular modelos de gestión e implementar los modelos procesales en el territorio nacional, administrar la Carrera Judicial, organizar la Comisión de Carrera Judicial, realizar los concursos y vigila el rendimiento de los funcionarios y los despachos. El Gerente de la Rama Judicial representará legalmente a la Rama Judicial. Ejercerá las demás funciones que le atribuya la ley',
  },
  {
    id: 256,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 7,
    chapter: 'GOBIERNO Y ADMINISTRACIÓN DE LA RAMA JUDICIAL',
    articleNumber: 256,
    content:
      'Acto Legislativo 02 de 2015, artículo 17. Deróguese el artículo 256 de la Constitución Política.',
  },
  {
    id: 257,
    titleNumber: 8,
    title: 'DE LA RAMA JUDICIAL',
    chapterNumber: 7,
    chapter: 'GOBIERNO Y ADMINISTRACIÓN DE LA RAMA JUDICIAL',
    articleNumber: 257,
    content:
      'Acto Legislativo 02 de 2015, artículo 19. El artículo 257 de la Constitución Política quedará así: La Comisión Nacional de Disciplina Judicial ejercerá la función jurisdiccional disciplinaria sobre los funcionarios y empleados de la Rama Judicial. Estará conformada por siete Magistrados, cuatro de los cuales serán elegidos por el Congreso en Pleno de ternas enviadas por el Consejo de Gobierno Judicial previa convocatoria pública reglada, adelantada por la Gerencia de la Rama Judicial, y tres de los cuales serán elegidos por el Congreso en Pleno de ternas enviadas por el Presidente de la República, previa convocatoria pública reglada. Tendrán periodos personales de ocho años, y deberán cumplir con los mismos requisitos exigidos para ser Magistrado de la Corte Suprema de Justicia. Los Magistrados de la Comisión Nacional de Disciplina Judicial no podrán ser reelegidos. Podrá haber Comisiones Seccionales de Disciplina Judicial integradas como lo señale la ley. La Comisión Nacional de Disciplina Judicial será la encargada de examinar la conducta y sancionar las faltas de los abogados en ejercicio de su profesión, en la instancia que señale la ley, salvo que esta función se atribuya por la ley a un Colegio de Abogados. Parágrafo. La Comisión Nacional de Disciplina Judicial y las Comisiones Seccionales de Disciplina Judicial no serán competentes para conocer de acciones de tutela. Parágrafo transitorio 1°. Los Magistrados de la Comisión Nacional de Disciplina Judicial deberán ser elegidos dentro del año siguiente a la vigencia del presente acto legislativo. Una vez posesionados, la Comisión Nacional de Disciplina Judicial asumirá los procesos disciplinarios de la Sala Jurisdiccional Disciplinaria del Consejo Superior de la Judicatura. Los actuales Magistrados de la Sala Jurisdiccional Disciplinaria del Consejo Superior de la Judicatura, ejercerán sus funciones hasta el día que se posesionen los miembros de la Comisión Nacional de Disciplina Judicial. Las Salas Disciplinarias de los Consejos Seccionales de la Judicatura serán transformadas en Comisiones Seccionales de Disciplina Judicial. Se garantizarán los derechos de carrera de los Magistrados y empleados de las salas disciplinarias de los Consejos Seccionales de la Judicatura quienes continuarán conociendo de los procesos a su cargo, sin solución de continuidad.',
  },
  {
    id: 258,
    titleNumber: 9,
    title: 'DE LAS ELECCIONES Y DE LA ORGANIZACIÓN ELECTORAL',
    chapterNumber: 1,
    chapter: 'DEL SUFRAGIO Y DE LAS ELECCIONES',
    articleNumber: 258,
    content:
      'Acto Legislativo 01 de 2003, artículo 11. El artículo 258 de la Constitución Política quedará así: El voto es un derecho y un deber ciudadano. El Estado velará porque se ejerza sin ningún tipo de coacción y en forma secreta por los ciudadanos en cubículos individuales instalados en cada mesa de votación sin perjuicio del uso de medios electrónicos o informáticos. En las elecciones de candidatos podrán emplearse tarjetas electorales numeradas e impresas en papel que ofrezca seguridad, las cuales serán distribuidas oficialmente. La Organización Electoral suministrará igualitariamente a los votantes instrumentos en los cuales deben aparecer identificados con claridad y en iguales condiciones los movimientos y partidos políticos con personería jurídica y los candidatos. La ley podrá implantar mecanismos de votación que otorguen más y mejores garantías para el libre ejercicio de este derecho de los ciudadanos. Parágrafo 1°. Acto Legislativo 01 de 2009, artículo 9°. El parágrafo 1° del artículo 258 de la Constitución Política quedará así: Deberá repetirse por una sola vez la votación para elegir miembros de una Corporación Pública, Gobernador, Alcalde o la primera vuelta en las elecciones presidenciales, cuando del total de votos válidos, los votos en blanco constituyan la mayoría. Tratándose de elecciones unipersonales no podrán presentarse los mismos candidatos, mientras en las de Corporaciones Públicas no se podrán presentar a las nuevas elecciones las listas que no hayan alcanzado el umbral. Parágrafo 2°. Se podrá implementar el voto electrónico para lograr agilidad y transparencia en todas las votaciones.',
  },
  {
    id: 259,
    titleNumber: 9,
    title: 'DE LAS ELECCIONES Y DE LA ORGANIZACIÓN ELECTORAL',
    chapterNumber: 1,
    chapter: 'DEL SUFRAGIO Y DE LAS ELECCIONES',
    articleNumber: 259,
    content:
      'Quienes elijan gobernadores y alcaldes, imponen por mandato al elegido el programa que presentó al inscribirse como candidato. La ley reglamentará el ejercicio del voto programático.',
  },
  {
    id: 260,
    titleNumber: 9,
    title: 'DE LAS ELECCIONES Y DE LA ORGANIZACIÓN ELECTORAL',
    chapterNumber: 1,
    chapter: 'DEL SUFRAGIO Y DE LAS ELECCIONES',
    articleNumber: 260,
    content:
      'Los ciudadanos eligen en forma directa Presidente y Vicepresidente de la República, Senadores, Representantes, Gobernadores, Diputados, Alcaldes, Concejales municipales y distritales, miembros de las juntas administradoras locales, y en su oportunidad, los miembros de la Asamblea Constituyente y las demás autoridades o funcionarios que la Constitución señale.',
  },
  {
    id: 261,
    titleNumber: 9,
    title: 'DE LAS ELECCIONES Y DE LA ORGANIZACIÓN ELECTORAL',
    chapterNumber: 1,
    chapter: 'DEL SUFRAGIO Y DE LAS ELECCIONES',
    articleNumber: 261,
    content:
      'Acto Legislativo 02 de 2015, artículo 26. Concordancias, vigencias y derogatorias. Deróguese el artículo 261 de la Constitución Política y reenumérese el artículo 262 que pasará a ser el 261. La elección del Presidente y Vicepresidente no podrá coincidir con otra elección. La de Congreso se hará en fecha separada de la elección de autoridades departamentales y municipales.',
  },
  {
    id: 262,
    titleNumber: 9,
    title: 'DE LAS ELECCIONES Y DE LA ORGANIZACIÓN ELECTORAL',
    chapterNumber: 1,
    chapter: 'DEL SUFRAGIO Y DE LAS ELECCIONES',
    articleNumber: 262,
    content:
      'Acto Legislativo 02 de 2015, artículo 20. El artículo 263 de la Constitución Política pasará a ser el 262 y quedará así: Artículo 262. Los partidos, movimientos políticos y grupos significativos de ciudadanos que decidan participar en procesos de elección popular, inscribirán candidatos y listas únicas, cuyo número de integrantes no podrá exceder el de curules o cargos a proveer en la respectiva circunscripción, excepto en las que se eligen hasta dos miembros, las cuales podrán estar integradas hasta por tres (3) candidatos. La selección de los candidatos de los partidos y movimientos políticos con personería jurídica se hará mediante mecanismos de democracia interna, de conformidad con la ley y los estatutos. En la conformación de las listas se observarán en forma progresiva, entre otros, los principios de paridad, alternancia y universalidad, según lo determine la ley. Cada partido o movimiento político podrá optar por el mecanismo de voto preferente. En tal caso, el elector podrá señalar el candidato de su preferencia entre los nombres de la lista que aparezcan en la tarjeta electoral. La lista se reordenará de acuerdo con la cantidad de votos obtenidos por cada uno de los candidatos. La asignación de curules entre los miembros de la respectiva lista se hará en orden descendente empezando por el candidato que haya obtenido el mayor número de votos preferentes. En el caso de los partidos y movimientos políticos que hayan optado por el mecanismo del voto preferente, los votos por el partido o movimiento que no hayan sido atribuidos por el elector a ningún candidato en particular, se contabilizarán a favor de la respectiva lista para efectos de la aplicación de las normas sobre el umbral y la cifra repartidora, pero no se computarán para la reordenación de la lista. Cuando el elector vote simultáneamente por el partido o movimiento político y por el candidato de su preferencia dentro de la respectiva lista, el voto será válido y se computará a favor del candidato. La ley regulará la financiación preponderantemente estatal de las campañas, los mecanismos de democracia interna de los partidos, la inscripción de candidatos y listas propias o de coalición a cargos uninominales o a corporaciones públicas, la administración de recursos y la protección de los derechos de los aspirantes. Los partidos y movimientos políticos con personería jurídica que sumados hayan obtenido una votación de hasta el quince por ciento (15%) de los votos válidos de la respectiva circunscripción, podrán presentar lista de candidatos en coalición para corporaciones públicas',
  },
  {
    id: 263,
    titleNumber: 9,
    title: 'DE LAS ELECCIONES Y DE LA ORGANIZACIÓN ELECTORAL',
    chapterNumber: 1,
    chapter: 'DEL SUFRAGIO Y DE LAS ELECCIONES',
    articleNumber: 263,
    content:
      'Acto Legislativo 02 de 2015, artículo 21. El artículo 263A de la Constitución Política pasará a ser el 263 y quedará así: Para garantizar la equitativa representación de los partidos y movimientos políticos y grupos significativos de ciudadanos, las curules de las Corporaciones Públicas se distribuirán mediante el sistema de cifra repartidora entre las listas de candidatos que superen un mínimo de votos que no podrá ser inferior al tres por ciento (3%) de los votos válidos para Senado de la República o al cincuenta por ciento (50%) del cuociente electoral en el caso de las demás Corporaciones, conforme lo establezcan la Constitución y la ley. La cifra repartidora resulta de dividir sucesivamente por uno, dos, tres o más, el número de votos por cada lista ordenando los resultados en forma decreciente hasta que se obtenga un número total de resultados igual al número de curules a proveer. El resultado menor se llamará cifra repartidora. Cada lista obtendrá tantas curules como veces esté contenida la cifra repartidora en el total de sus votos. En las circunscripciones en las que se eligen dos miembros se aplicará el sistema de cuociente electoral entre las listas que superen en votos el 30% de dicho cuociente. En las circunscripciones en las que se elige un miembro, la curul se adjudicará a la lista mayoritaria. Cuando ninguna de las listas supere el umbral, las curules se distribuirán entre todas las inscritas, de acuerdo con la regla de asignación que corresponda.',
  },
  {
    id: 264,
    titleNumber: 9,
    title: 'DE LAS ELECCIONES Y DE LA ORGANIZACIÓN ELECTORAL',
    chapterNumber: 2,
    chapter: 'DE LAS AUTORIDADES ELECTORALES',
    articleNumber: 264,
    content:
      'Acto Legislativo 01 de 2003, artículo 14. El artículo 264 de la Constitución Política quedará así: El Consejo Nacional Electoral se compondrá de nueve (9) miembros elegidos por el Congreso de la República en pleno, para un período institucional de cuatro (4) años, mediante el Sistema de Cifra Repartidora, previa postulación de los partidos o movimientos políticos con personería jurídica o por coaliciones entre ellos. Sus miembros serán servidores públicos de dedicación exclusiva, tendrán las mismas calidades, inhabilidades, incompatibilidades y derechos de los magistrados de la Corte Suprema de Justicia. *Acto Legislativo 02 de 2015, artículo 26. Concordancias, vigencias y derogatorias. Elimínese la expresión “y podrán ser reelegidos por una sola vez” en el artículo 264 de la Constitución Política. (Correspondía a la parte final del inciso anterior) Parágrafo. La jurisdicción contencioso administrativa decidirá la acción de nulidad electoral en el término máximo de un (1) año. En los casos de única instancia, según la ley, el término para decidir no podrá exceder de seis (6) meses.',
  },
  {
    id: 265,
    titleNumber: 9,
    title: 'DE LAS ELECCIONES Y DE LA ORGANIZACIÓN ELECTORAL',
    chapterNumber: 2,
    chapter: 'DE LAS AUTORIDADES ELECTORALES',
    articleNumber: 265,
    content:
      'Acto Legislativo 01 de 2009, artículo 12. El artículo 265 de la Constitución Política quedará así: El Consejo Nacional Electoral regulará, inspeccionará, vigilará y controlará toda la actividad electoral de los partidos y movimientos políticos, de los grupos significativos de ciudadanos, de sus representantes legales, directivos y candidatos, garantizando el cumplimiento de los principios y deberes que a ellos corresponden, y gozará de autonomía presupuestal y administrativa. Tendrá las siguientes atribuciones especiales: 1. Ejercer la suprema inspección, vigilancia y control de la organización electoral. 2. Dar posesión de su cargo al Registrador Nacional del Estado Civil. 3. Conocer y decidir definitivamente los recursos que se interpongan contra las decisiones de sus delegados sobre escrutinios generales y en tales casos hacer la declaratoria de elección y expedir las credenciales correspondientes. 4. Además, de oficio, o por solicitud, revisar escrutinios y los documentos electorales concernientes a cualquiera de las etapas del proceso administrativo de elección con el objeto de que se garantice la verdad de los resultados. 5. Servir de cuerpo consultivo del Gobierno en materias de su competencia, presentar proyectos de acto legislativo y de ley, y recomendar proyectos de decreto. 6. Velar por el cumplimiento de las normas sobre partidos y movimientos políticos y de las disposiciones sobre publicidad y encuestas de opinión política; por los derechos de la oposición y de las minorías, y por el desarrollo de los procesos electorales en condiciones de plenas garantías. 7. Distribuir los aportes que para el financiamiento de las campañas electorales y para asegurar el derecho de participación política de los ciudadanos, establezca la ley. 8. Efectuar el escrutinio general de toda votación nacional, hacer la declaratoria de elección y expedir las credenciales a que haya lugar. 9. Reconocer y revocar la Personería Jurídica de los partidos y movimientos políticos. 10. Reglamentar la participación de los partidos y movimientos políticos en los medios de comunicación social del Estado. 11. Colaborar para la realización de consultas de los partidos y movimientos para la toma de decisiones y la escogencia de sus candidatos. 12. Decidir la revocatoria de la inscripción de candidatos a Corporaciones Públicas o cargos de elección popular, cuando exista plena prueba de que aquellos están incursos en causal de inhabilidad prevista en la Constitución y la ley. En ningún caso podrá declarar la elección de dichos candidatos. 13. Darse su propio reglamento. 14. Las demás que le confiera la ley',
  },
  {
    id: 266,
    titleNumber: 9,
    title: 'DE LAS ELECCIONES Y DE LA ORGANIZACIÓN ELECTORAL',
    chapterNumber: 2,
    chapter: 'DE LAS AUTORIDADES ELECTORALES',
    articleNumber: 266,
    content:
      'Acto Legislativo 01 de 2003, artículo 15. El artículo 266 de la Constitución Política quedará así: El Registrador Nacional del Estado Civil será escogido por los Presidentes de la Corte Constitucional, la Corte Suprema de Justicia y el Consejo de Estado, mediante concurso de méritos organizado según la ley. Su período será de cuatro (4) años, deberá reunir las mismas calidades que exige la Constitución Política para ser Magistrado de la Corte Suprema de Justicia y no haber ejercido funciones en cargos directivos en partidos o movimientos políticos dentro del año inmediatamente anterior a su elección. Y ejercerá las funciones que establezca la ley, incluida la dirección y organización de las elecciones, el registro civil y la identificación de las personas, así como la de celebrar contratos en nombre de la nación, en los casos que aquella disponga. Acto Legislativo 02 de 2015, artículo 26. Concordancias, vigencias y derogatorias. Elimínese la expresión “Podrá ser reelegido por una sola vez y” en el artículo 266 de la Constitución Política. (Estaba al inicio del inciso). La Registraduría Nacional estará conformada por servidores públicos que pertenezcan a una carrera administrativa especial a la cual se ingresará exclusivamente por concurso de méritos y que preverá el retiro flexible de conformidad con las necesidades del servicio. En todo caso, los cargos de responsabilidad administrativa o electoral serán de libre remoción, de conformidad con la ley. Parágrafo transitorio. El período de los actuales miembros del Consejo Nacional Electoral y Registrador Nacional del Estado Civil irá hasta el año 2006. La siguiente elección de unos y otro se hará de conformidad con lo dispuesto en el presente Acto Legislativo.',
  },
  {
    id: 267,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 1,
    chapter: 'DE LA CONTRALORÍA GENERAL DE LA REPÚBLICA',
    articleNumber: 267,
    content:
      'El control fiscal es una función pública que ejercerá la Contraloría General de la República, la cual vigila la gestión fiscal de la administración y de los particulares o entidades que manejen fondos o bienes de la nación. Dicho control se ejercerá en forma posterior y selectiva conforme a los procedimientos, sistemas y principios que establezca la ley. Esta podrá, sin embargo, autorizar que, en casos especiales, la vigilancia se realice por empresas privadas colombianas escogidas por concurso público de méritos, y contratadas previo concepto del Consejo de Estado. La vigilancia de la gestión fiscal del Estado incluye el ejercicio de un control financiero, de gestión y de resultados, fundado en la eficiencia, la economía, la equidad y la valoración de los costos ambientales. En los casos excepcionales, previstos por la ley, la Contraloría podrá ejercer control posterior sobre cuentas de cualquier entidad territorial. La Contraloría es una entidad de carácter técnico con autonomía administrativa y presupuestal. No tendrá funciones administrativas distintas de las inherentes a su propia organización. Acto Legislativo 2 de 2015, artículo 22. Modifíquense los incisos 5° y 6° del artículo 267 de la Constitución Política, los cuales quedarán así: Inciso 5° El Contralor será elegido por el Congreso en Pleno, por mayoría absoluta, en el primer mes de sus sesiones para un periodo igual al del Presidente de la República, de lista de elegibles conformada por convocatoria pública con base en lo dispuesto en el artículo 126 de la Constitución y no podrá ser reelegido ni continuar en ejercicio de sus funciones al vencimiento del mismo. Inciso 6° Solo el Congreso puede admitir la renuncia que presente el Contralor y proveer las faltas absolutas y temporales del cargo. Para ser elegido Contralor General de la República se requiere ser colombiano de nacimiento y en ejercicio de la ciudadanía; tener más de 35 años de edad; tener título universitario; o haber sido profesor universitario durante un tiempo no menor de 5 años; y acreditar las calidades adicionales que exija la ley. No podrá ser elegido Contralor General quien sea o haya sido miembro del Congreso u ocupado cargo público alguno del orden nacional, salvo la docencia, en el año inmediatamente anterior a la elección. Tampoco podrá ser elegido quien haya sido condenado a pena de prisión por delitos comunes. En ningún caso podrán intervenir en la postulación o elección del Contralor personas que se hallen dentro del cuarto grado de consanguinidad, segundo de afinidad y primero civil o legal respecto de los candidatos',
  },
  {
    id: 268,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 1,
    chapter: 'DE LA CONTRALORÍA GENERAL DE LA REPÚBLICA',
    articleNumber: 268,
    content:
      'El Contralor General de la República tendrá las siguientes atribuciones: 1. Prescribir los métodos y la forma de rendir cuentas los responsables del manejo de fondos o bienes de la nación e indicar los criterios de evaluación financiera, operativa y de resultados que deberán seguirse. 2. Revisar y fenecer las cuentas que deben llevar los responsables del erario y determinar el grado de eficiencia, eficacia y economía con que hayan obrado. 3. Llevar un registro de la deuda pública de la nación y de las entidades territoriales. 4. Exigir informes sobre su gestión fiscal a los empleados oficiales de cualquier orden y a toda persona o entidad pública o privada que administre fondos o bienes de la nación. 5. Establecer la responsabilidad que se derive de la gestión fiscal, imponer las sanciones pecuniarias que sean del caso, recaudar su monto y ejercer la jurisdicción coactiva sobre los alcances deducidos de la misma. 6. Conceptuar sobre la calidad y eficiencia del control fiscal interno de las entidades y organismos del Estado. 7. Presentar al Congreso de la República un informe anual sobre el estado de los recursos naturales y del ambiente. 8. Promover ante las autoridades competentes, aportando las pruebas respectivas, investigaciones penales o disciplinarias contra quienes hayan causado perjuicio a los intereses patrimoniales del Estado. La Contraloría, bajo su responsabilidad, podrá exigir, verdad sabida y buena fe guardada, la suspensión inmediata de funcionarios mientras culminan las investigaciones o los respectivos procesos penales o disciplinarios. 9. Presentar proyectos de ley relativos al régimen del control fiscal y a la organización y funcionamiento de la Contraloría General. 10. Proveer mediante concurso público los empleos de su dependencia que haya creado la ley. Esta determinará un régimen especial de carrera administrativa para la selección, promoción y retiro de los funcionarios de la Contraloría. Se prohíbe a quienes formen parte de las corporaciones que intervienen en la postulación y elección del Contralor, dar recomendaciones personales y políticas para empleos en su despacho. 11. Presentar informes al Congreso y al Presidente de la República sobre el cumplimiento de sus funciones y certificación sobre la situación de las finanzas del Estado, de acuerdo con la ley. 12. Dictar normas generales para armonizar los sistemas de control fiscal de todas las entidades públicas del orden nacional y territorial. 13. Las demás que señale la ley. Presentar a la Cámara de Representantes la Cuenta General de Presupuesto y del Tesoro y certificar el balance de la Hacienda presentado al Congreso por el Contador General.',
  },
  {
    id: 269,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 1,
    chapter: 'DE LA CONTRALORÍA GENERAL DE LA REPÚBLICA',
    articleNumber: 269,
    content:
      'En las entidades públicas, las autoridades correspondientes están obligadas a diseñar y aplicar, según la naturaleza de sus funciones, métodos y procedimientos de control interno, de conformidad con lo que disponga la ley, la cual podrá establecer excepciones y autorizar la contratación de dichos servicios con empresas privadas colombianas.',
  },
  {
    id: 270,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 1,
    chapter: 'DE LA CONTRALORÍA GENERAL DE LA REPÚBLICA',
    articleNumber: 270,
    content:
      'La ley organizará las formas y los sistemas de participación ciudadana que permitan vigilar la gestión pública que se cumpla en los diversos niveles administrativos y sus resultados.',
  },
  {
    id: 271,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 1,
    chapter: 'DE LA CONTRALORÍA GENERAL DE LA REPÚBLICA',
    articleNumber: 271,
    content:
      'Los resultados de las indagaciones preliminares adelantadas por la Contraloría tendrán valor probatorio ante la Fiscalía General de la Nación y el juez competente.',
  },
  {
    id: 272,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 1,
    chapter: 'DE LA CONTRALORÍA GENERAL DE LA REPÚBLICA',
    articleNumber: 272,
    content:
      'La vigilancia de la gestión fiscal de los departamentos, distritos y municipios donde haya contralorías, corresponde a estas y se ejercerá en forma posterior y selectiva. La de los municipios incumbe a las contralorías departamentales, salvo lo que la ley determine respecto de contralorías municipales. Corresponde a las asambleas y a los concejos distritales y municipales organizar las respectivas contralorías como entidades técnicas dotadas de autonomía administrativa y presupuestal. quense los incisos 4° y 8° del artículo 272 de la Constitución Política. Inciso 4°: Los Contralores departamentales, distritales y municipales serán elegidos por las Asambleas Departamentales, Concejos Municipales y Distritales, mediante convocatoria pública conforme a la ley, siguiendo los principios de transparencia, publicidad, objetividad, participación ciudadana y equidad de género, para periodo igual al del Gobernador o Alcalde, según el caso. Ningún contralor podrá ser reelegido para el período inmediato. Los contralores departamentales, distritales y municipales ejercerán, en el ámbito de su jurisdicción, las funciones atribuidas al Contralor General de la República en el artículo 268 y podrán, según lo autorice la ley, contratar con empresas privadas colombianas el ejercicio de la vigilancia fiscal. Para ser elegido contralor departamental, distrital o municipal se requiere ser colombiano por nacimiento, ciudadano en ejercicio, tener más de veinticinco años, acreditar título universitario y las demás calidades que establezca la ley. Acto Legislativo 2 de 2015, artículo 23. Modifíquense los incisos 4° y 8° del artículo 272 de la Constitución Política. Inciso 8°: No podrá ser elegido quien sea o haya sido en el último año miembro de la Asamblea o Concejo que deba hacer la elección, ni quien haya ocupado cargo público en el nivel ejecutivo del orden departamental, distrital o municipal. Quien haya ocupado en propiedad el cargo de contralor departamental, distrital o municipal, no podrá desempeñar empleo oficial alguno en el respectivo departamento, distrito o municipio, ni ser inscrito como candidato a cargos de elección popular sino un año después de haber cesado en sus funciones.',
  },
  {
    id: 273,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 1,
    chapter: 'DE LA CONTRALORÍA GENERAL DE LA REPÚBLICA',
    articleNumber: 273,
    content:
      'A solicitud de cualquiera de los proponentes, el Contralor General de la República y demás autoridades de control fiscal competentes, ordenarán que el acto de adjudicación de una licitación tenga lugar en audiencia pública. Los casos en que se aplique el mecanismo de audiencia pública, la manera como se efectuará la evaluación de las propuestas y las condiciones bajo las cuales se realizará aquella, serán señalados por la ley.',
  },
  {
    id: 274,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 1,
    chapter: 'DE LA CONTRALORÍA GENERAL DE LA REPÚBLICA',
    articleNumber: 274,
    content:
      'La vigilancia de la gestión fiscal de la Contraloría General de la República se ejercerá por un auditor elegido para períodos de dos años por el Consejo de Estado, de terna enviada por la Corte Suprema de Justicia. La ley determinará la manera de ejercer dicha vigilancia a nivel departamental, distrital y municipal.',
  },
  {
    id: 275,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 2,
    chapter: 'DEL MINISTERIO PÚBLICO',
    articleNumber: 275,
    content:
      'El Procurador General de la Nación es el supremo director del Ministerio Público.',
  },
  {
    id: 276,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 2,
    chapter: 'DEL MINISTERIO PÚBLICO',
    articleNumber: 276,
    content:
      'El Procurador General de la Nación será elegido por el Senado, para un período de cuatro años, de terna integrada por candidatos del Presidente de la República, la Corte Suprema de Justicia y el Consejo de Estado.',
  },
  {
    id: 277,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 2,
    chapter: 'DEL MINISTERIO PÚBLICO',
    articleNumber: 277,
    content:
      'El Procurador General de la Nación, por sí o por medio de sus delegados y agentes, tendrá las siguientes funciones: 1. Vigilar el cumplimiento de la Constitución, las leyes, las decisiones judiciales y los actos administrativos. 2. Proteger los derechos humanos y asegurar su efectividad, con el auxilio del Defensor del Pueblo. 3. Defender los intereses de la sociedad. 4. Defender los intereses colectivos, en especial el ambiente. 5. Velar por el ejercicio diligente y eficiente de las funciones administrativas. 6. Ejercer vigilancia superior de la conducta oficial de quienes desempeñen funciones públicas, inclusive las de elección popular; ejercer preferentemente el poder disciplinario; adelantar las investigaciones correspondientes, e imponer las respectivas sanciones conforme a la ley. 7. Intervenir en los procesos y ante las autoridades judiciales o administrativas, cuando sea necesario en defensa del orden jurídico, del patrimonio público, o de los derechos y garantías fundamentales. 8. Rendir anualmente informe de su gestión al Congreso. 9. Exigir a los funcionarios públicos y a los particulares la información que considere necesaria. 10. Las demás que determine la ley. Para el cumplimiento de sus funciones la Procuraduría tendrá atribuciones de policía judicial, y podrá interponer las acciones que considere necesarias.',
  },
  {
    id: 278,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 2,
    chapter: 'DEL MINISTERIO PÚBLICO',
    articleNumber: 278,
    content:
      'El Procurador General de la Nación ejercerá directamente las siguientes funciones: 1. Desvincular del cargo, previa audiencia y mediante decisión motivada, al funcionario público que incurra en alguna de las siguientes faltas: infringir de manera manifiesta la Constitución o la ley; derivar evidente e indebido provecho patrimonial en el ejercicio de su cargo o de sus funciones; obstaculizar, en forma grave, las investigaciones que realice la Procuraduría o una autoridad administrativa o jurisdiccional; obrar con manifiesta negligencia en la investigación y sanción de las faltas disciplinarias de los empleados de su dependencia, o en la denuncia de los hechos punibles de que tenga conocimiento en razón del ejercicio de su cargo. 2. Emitir conceptos en los procesos disciplinarios que se adelanten contra funcionarios sometidos a fuero especial. 3. Presentar proyectos de ley sobre materias relativas a su competencia. 4. Exhortar al Congreso para que expida las leyes que aseguren la promoción, el ejercicio y la protección de los derechos humanos, y exigir su cumplimiento a las autoridades competentes. 5. Rendir concepto en los procesos de control de constitucionalidad. 6. Nombrar y remover, de conformidad con la ley, los funcionarios y empleados de su dependencia.',
  },
  {
    id: 279,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 2,
    chapter: 'DEL MINISTERIO PÚBLICO',
    articleNumber: 279,
    content:
      'La ley determinará lo relativo a la estructura y al funcionamiento de la Procuraduría General de la Nación, regulará lo atinente al ingreso y concurso de méritos y al retiro del servicio, a las inhabilidades, incompatibilidades, denominación, calidades, remuneración y al régimen disciplinario de todos los funcionarios y empleados de dicho organismo.',
  },
  {
    id: 280,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 2,
    chapter: 'DEL MINISTERIO PÚBLICO',
    articleNumber: 280,
    content:
      'Los agentes del Ministerio Público tendrán las mismas calidades, categoría, remuneración, derechos y prestaciones de los magistrados y jueces de mayor jerarquía ante quienes ejerzan el cargo.',
  },
  {
    id: 281,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 2,
    chapter: 'DEL MINISTERIO PÚBLICO',
    articleNumber: 281,
    content:
      'Acto Legislativo 02 de 2015, artículo 24. El artículo 281 de la Constitución Política quedará así: El Defensor del Pueblo ejercerá sus funciones de manera autónoma. Será elegido por la Cámara de Representantes para un periodo institucional de cuatro años de terna elaborada por el Presidente de la República.',
  },
  {
    id: 282,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 2,
    chapter: 'DEL MINISTERIO PÚBLICO',
    articleNumber: 282,
    content:
      'El Defensor del Pueblo velará por la promoción, el ejercicio y la divulgación de los derechos humanos, para lo cual ejercerá las siguientes funciones: 1. Orientar e instruir a los habitantes del territorio nacional y a los colombianos en el exterior en el ejercicio y defensa de sus derechos ante las autoridades competentes o entidades de carácter privado. 2. Divulgar los derechos humanos y recomendar las políticas para su enseñanza. 3. Invocar el derecho de hábeas corpus e interponer las acciones de tutela, sin perjuicio del derecho que asiste a los interesados. 4. Organizar y dirigir la defensoría pública en los términos que señale la ley. 5. Interponer acciones populares en asuntos relacionados con su competencia. 6. Presentar proyectos de ley sobre materias relativas a su competencia. 7. Rendir informes al Congreso sobre el cumplimiento de sus funciones. 8. Las demás que determine la ley.',
  },
  {
    id: 283,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 2,
    chapter: 'DEL MINISTERIO PÚBLICO',
    articleNumber: 283,
    content:
      'Acto Legislativo 02 de 2015. El artículo 283 de la Constitución Política quedará así: La ley determinará lo relativo a la organización y funcionamiento de la Defensoría del Pueblo como ente autónomo administrativa y presupuestalmente',
  },
  {
    id: 284,
    titleNumber: 10,
    title: 'DE LOS ORGANISMOS DE CONTROL',
    chapterNumber: 2,
    chapter: 'DEL MINISTERIO PÚBLICO',
    articleNumber: 284,
    content:
      'Salvo las excepciones previstas en la Constitución y la ley, el Procurador General de la Nación y el Defensor del Pueblo podrán requerir de las autoridades las informaciones necesarias para el ejercicio de sus funciones, sin que pueda oponérseles reserva alguna.',
  },
  {
    id: 285,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 285,
    content:
      'Fuera de la división general del territorio, habrá las que determine la ley para el cumplimiento de las funciones y servicios a cargo del Estado.',
  },
  {
    id: 286,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 286,
    content:
      'Son entidades territoriales los departamentos, los distritos, los municipios y los territorios indígenas. La ley podrá darles el carácter de entidades territoriales a las regiones y provincias que se constituyan en los términos de la Constitución y de la ley',
  },
  {
    id: 287,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 287,
    content:
      'Las entidades territoriales gozan de autonomía para la gestión de sus intereses, y dentro de los límites de la Constitución y la ley. En tal virtud tendrán los siguientes derechos: 1. Gobernarse por autoridades propias. 2. Ejercer las competencias que les correspondan. 3. Administrar los recursos y establecer los tributos necesarios para el cumplimiento de sus funciones. 4. Participar en las rentas nacionales',
  },
  {
    id: 288,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 288,
    content:
      'La ley orgánica de ordenamiento territorial establecerá la distribución de competencias entre la nación y las entidades territoriales. Las competencias atribuidas a los distintos niveles territoriales serán ejercidas conforme a los principios de coordinación, concurrencia y subsidiariedad en los términos que establezca la ley.',
  },
  {
    id: 289,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 289,
    content:
      'Por mandato de la ley, los departamentos y municipios ubicados en zonas fronterizas podrán adelantar directamente con la entidad territorial limítrofe del país vecino, de igual nivel, programas de cooperación e integración, dirigidos a fomentar el desarrollo comunitario, la prestación de servicios públicos y la preservación del ambiente.',
  },
  {
    id: 290,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 290,
    content:
      'Con el cumplimiento de los requisitos y formalidades que señale la ley, y en los casos que esta determine, se realizará el examen periódico de los límites de las entidades territoriales y se publicará el mapa oficial de la República.',
  },
  {
    id: 291,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 291,
    content:
      'Los miembros de las corporaciones públicas de las entidades territoriales no podrán aceptar cargo alguno en la administración pública, y si lo hicieren perderán su investidura. Los contralores y personeros solo asistirán a las juntas directivas y consejos de administración que operen en las respectivas entidades territoriales, cuando sean expresamente invitados con fines específicos.',
  },
  {
    id: 292,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 292,
    content:
      'Los diputados y concejales y sus parientes dentro del grado que señale la ley no podrán formar parte de las juntas directivas de las entidades descentralizadas del respectivo departamento, distrito o municipio. No podrán ser designados funcionarios de la correspondiente entidad territorial los cónyuges o compañeros permanentes de los diputados y concejales, ni sus parientes en el segundo grado de consanguinidad, primero de afinidad o único civil.',
  },
  {
    id: 293,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 293,
    content:
      'Sin perjuicio de lo establecido en la Constitución, la ley determinará las calidades, inhabilidades, incompatibilidades, fecha de posesión, períodos de sesiones, faltas absolutas o temporales, causas de destitución y formas de llenar las vacantes de los ciudadanos que sean elegidos por voto popular para el desempeño de funciones públicas en las entidades territoriales. La ley dictará también las demás disposiciones necesarias para su elección y desempeño de funciones.',
  },
  {
    id: 294,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 294,
    content:
      'La ley no podrá conceder exenciones ni tratamientos preferenciales en relación con los tributos de propiedad de las entidades territoriales. Tampoco podrá imponer recargos sobre',
  },
  {
    id: 295,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 295,
    content:
      'Las entidades territoriales podrán emitir títulos y bonos de deuda pública, con sujeción a las condiciones del mercado financiero e igualmente contratar crédito externo, todo de conformidad con la ley que regule la materia.',
  },
  {
    id: 296,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 296,
    content:
      'Para la conservación del orden público o para su restablecimiento donde fuere turbado, los actos y órdenes del Presidente de la República se aplicarán de manera inmediata y de preferencia sobre los de los gobernadores; los actos y órdenes de los gobernadores se aplicarán de igual manera y con los mismos efectos en relación con los de los alcaldes.',
  },
  {
    id: 297,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 297,
    content:
      'El Congreso Nacional puede decretar la formación de nuevos departamentos, siempre que se cumplan los requisitos exigidos en la Ley Orgánica del Ordenamiento Territorial y una vez verificados los procedimientos, estudios y consulta popular dispuestos por esta Constitución.',
  },
  {
    id: 298,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 298,
    content:
      'Los departamentos tienen autonomía para la administración de los asuntos seccionales y la planificación y promoción del desarrollo económico y social dentro de su territorio en los términos establecidos por la Constitución. Los departamentos ejercen funciones administrativas, de coordinación, de complementariedad de la acción municipal, de intermediación entre la nación y los municipios y de prestación de los servicios que determinen la Constitución y las leyes. La ley reglamentará lo relacionado con el ejercicio de las atribuciones que la Constitución les otorga.',
  },
  {
    id: 299,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 299,
    content:
      'Acto Legislativo 01 de 2007, artículo 3°. El artículo 299 de la Constitución Política de Colombia quedará así: En cada departamento habrá una corporación político-administrativa de elección popular que se denominará asamblea departamental, la cual estará integrada por no menos de 11 miembros ni más de 31. Dicha corporación gozará de autonomía administrativa y presupuesto propio, y podrá ejercer control político sobre la administración departamental. El régimen de inhabilidades e incompatibilidades de los diputados será fijado por la ley. No podrá ser menos estricto que el señalado para los congresistas en lo que corresponda. El período de los diputados será de cuatro años y tendrá la calidad de servidores públicos. Para ser elegido diputado se requiere ser ciudadano en ejercicio, no haber sido condenado a pena privativa de la libertad, con excepción de los delitos políticos o culposos y haber residido en la respectiva circunscripción electoral durante el año inmediatamente anterior a la fecha de la elección. Los miembros de la Asamblea Departamental tendrán derecho a una remuneración durante las sesiones correspondientes y estarán amparados por un régimen de prestaciones y seguridad social, en los términos que fijen la ley',
  },
  {
    id: 300,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 300,
    content:
      'Acto Legislativo 01 de 1996, artículo 2°. El artículo 300 de la Constitución Política de Colombia quedará así: Corresponde a las Asambleas Departamentales, por medio de ordenanzas: 1. Reglamentar el ejercicio de las funciones y la prestación de los servicios a cargo del departamento. 2. Expedir las disposiciones relacionadas con la planeación, el desarrollo económico y social, el apoyo financiero y crediticio a los municipios, el turismo, el transporte, el ambiente, las obras públicas, las vías de comunicación y el desarrollo de sus zonas de frontera. 3. Adoptar de acuerdo con la ley los planes y programas de desarrollo económico y social y los de obras públicas, con las determinaciones de las inversiones y medidas que se consideren necesarias para impulsar su ejecución y asegurar su cumplimiento. 4. Decretar, de conformidad con la ley, los tributos y contribuciones necesarios para el cumplimiento de las funciones departamentales. 5. Expedir las normas orgánicas del presupuesto departamental y el presupuesto anual de rentas y gastos. 6. Con sujeción a los requisitos que señale la Ley, crear y suprimir municipios, segregar y agregar territorios municipales, y organizar provincias. 7. Determinar la estructura de la Administración Departamental, las funciones de sus dependencias, las escalas de remuneración correspondientes a sus distintas categorías de empleo; crear los establecimientos públicos y las empresas industriales o comerciales del departamento y autorizar la formación de sociedades de economía mixta. 8. Dictar normas de policía en todo aquello que no sea materia de disposición legal. 9. Autorizar al Gobernador del Departamento para celebrar contratos, negociar empréstitos, enajenar bienes y ejercer, pro témpore, precisas funciones de las que corresponden a las Asambleas Departamentales. 10. Regular, en concurrencia con el municipio, el deporte, la educación y la salud en los términos que determina la ley. 11. Solicitar informes sobre el ejercicio de sus funciones al Contralor General del Departamento, Secretario de Gabinete, Jefes de Departamentos Administrativos y Directores de Institutos Descentralizados del orden departamental. 12. Cumplir las demás funciones que le asignen la Constitución y la ley. Los planes y programas de desarrollo de obras públicas, serán coordinados e integrados con los planes y programas municipales, regionales y nacionales. Las ordenanzas a que se refieren los numerales 3, 5 y 7 de este artículo, las que decretan inversiones, participaciones o cesiones de rentas y bienes departamentales y las que creen servicios a cargo del departamento o los traspasen a él, solo podrán ser dictadas o reformadas a iniciativa del Gobernador. Acto Legislativo 01 de 2007, artículo 4°. Adiciónese al artículo 300 de la Constitución Política de Colombia con estos numerales: 13. Citar y requerir a los Secretarios del Despacho del Gobernador para que concurran a las sesiones de la asamblea. Las citaciones deberán hacerse con una anticipación no menor de cinco días y formularse en cuestionario escrito. En caso de que los Secretarios del Despacho del Gobernador no concurran, sin excusa aceptada por la asamblea, esta podrá proponer moción de censura. Los Secretarios deberán ser oídos en la sesión para la cual fueron citados, sin perjuicio de que el debate continúe en las sesiones posteriores por decisión de la asamblea. El debate no podrá extenderse a asuntos ajenos al cuestionario y deberá encabezar el orden del día de la sesión. 14. Proponer moción de censura respecto de los Secretarios de Despacho del Gobernador por asuntos relacionados con funciones propias del cargo, o por desatención a los requerimientos y citaciones de la asamblea. La moción de censura deberá ser propuesta por la tercera parte de los miembros que componen la asamblea. La votación se hará entre el tercero y el décimo día siguientes a la terminación del debate, con audiencia pública del funcionario respectivo. Su aprobación requerirá el voto afirmativo de las dos terceras partes de los miembros que integran la corporación. Una vez aprobada, el funcionario quedará separado de su cargo. Si fuere rechazada, no podrá presentarse otra sobre la misma materia a menos que la motiven hechos nuevos. La renuncia del funcionario respecto del cual se haya promovido moción de censura no obsta para que la misma sea aprobada conforme a lo previsto en este artículo.',
  },
  {
    id: 301,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 301,
    content:
      'La ley señalará los casos en los cuales las asambleas podrán delegar en los concejos municipales las funciones que ella misma determine. En cualquier momento, las asambleas podrán reasumir el ejercicio de las funciones delegadas.',
  },
  {
    id: 302,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 302,
    content:
      'La ley podrá establecer para uno o varios departamentos diversas capacidades y competencias de gestión administrativa y fiscal distintas a las señaladas para ellos en la Constitución, en atención a la necesidad de mejorar la administración o la prestación de los servicios públicos de acuerdo con su población, recursos económicos y naturales y circunstancias sociales, culturales y ecológicas. En desarrollo de lo anterior, la ley podrá delegar, a uno o varios departamentos, atribuciones propias de los organismos o entidades públicas nacionales.',
  },
  {
    id: 303,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 303,
    content:
      'Acto Legislativo 02 de 2002, artículo 1°. El artículo 303 de la Constitución Política quedará así: “En cada uno de los departamentos habrá un Gobernador que será jefe de la administración seccional y representante legal del departamento; el gobernador será agente del Presidente de la República para el mantenimiento del orden público y para la ejecución de la política económica general, así como para aquellos asuntos que mediante convenios la nación acuerde con el departamento. Los gobernadores serán elegidos popularmente para períodos institucionales de cuatro (4) años y no podrán ser reelegidos para el período siguiente”. La ley fijará las calidades, requisitos, inhabilidades e incompatibilidades de los gobernadores; reglamentará su elección; determinará sus faltas absolutas y temporales; y la forma de llenar estas últimas y dictará las demás disposiciones necesarias para el normal desempeño de sus cargos. Siempre que se presente falta absoluta a más de dieciocho (18) meses de la terminación del período, se elegirá gobernador para el tiempo que reste. En caso de que faltare menos de dieciocho (18) meses, el Presidente de la República designará un Gobernador para lo que reste del período, respetando el partido, grupo político o coalición por el cual fue inscrito el gobernador elegido.',
  },
  {
    id: 304,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 304,
    content:
      'El Presidente de la República, en los casos taxativamente señalados por la ley, suspenderá o destituirá a los gobernadores. Su régimen de inhabilidades e incompatibilidades no será menos estricto que el establecido para el Presidente de la República.',
  },
  {
    id: 305,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 305,
    content:
      'Son atribuciones del gobernador: 1. Cumplir y hacer cumplir la Constitución, las leyes, los decretos del Gobierno y las ordenanzas de las Asambleas Departamentales. 2. Dirigir y coordinar la acción administrativa del departamento y actuar en su nombre como gestor y promotor del desarrollo integral de su territorio, de conformidad con la Constitución y las leyes. 3. Dirigir y coordinar los servicios nacionales en las condiciones de la delegación que le confiera el Presidente de la República. 4. Presentar oportunamente a la asamblea departamental los proyectos de ordenanza sobre planes y programas de desarrollo económico y social, obras públicas y presupuesto anual de rentas y gastos. 5. Nombrar y remover libremente a los gerentes o directores de los establecimientos públicos y de las empresas industriales o comerciales del departamento. Los representantes del departamento en las juntas directivas de tales organismos y los directores o gerentes de los mismos son agentes del gobernador. 6. Fomentar de acuerdo con los planes y programas generales, las empresas, industrias y actividades convenientes al desarrollo cultural, social y económico del departamento que no correspondan a la nación y a los municipios. 7. Crear, suprimir y fusionar los empleos de sus dependencias, señalar sus funciones especiales y fijar sus emolumentos con sujeción a la ley y a las ordenanzas respectivas. Con cargo al tesoro departamental no podrá crear obligaciones que excedan al monto global fijado para el respectivo servicio en el presupuesto inicialmente aprobado. 8. Suprimir o fusionar las entidades departamentales de conformidad con las ordenanzas. 9. Objetar por motivos de inconstitucionalidad, ilegalidad o inconveniencia, los proyectos de ordenanza, o sancionarlos y promulgarlos. 10. Revisar los actos de los concejos municipales y de los alcaldes y, por motivos de inconstitucionalidad o ilegalidad, remitirlos al tribunal competente para que decida sobre su validez. 11. Velar por la exacta recaudación de las rentas departamentales, de las entidades descentralizadas y las que sean objeto de transferencias por la nación. 12. Convocar a la asamblea departamental a sesiones extraordinarias en las que solo se ocupará de los temas y materias para lo cual fue convocada. 13. Escoger de las ternas enviadas por el jefe nacional respectivo, los gerentes o jefes seccionales de los establecimientos públicos del orden nacional que operen en el departamento, de acuerdo con la ley. 14. Ejercer las funciones administrativas que le delegue el Presidente de la República. 15. Las demás que le señale la Constitución, las leyes y las ordenanzas',
  },
  {
    id: 306,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 306,
    content:
      'Dos o más departamentos podrán constituirse en regiones administrativas y de planificación, con personería jurídica, autonomía y patrimonio propio. Su objeto principal será el desarrollo económico y social del respectivo territorio',
  },
  {
    id: 307,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 307,
    content:
      'La respectiva ley orgánica, previo concepto de la Comisión de Ordenamiento Territorial, establecerá las condiciones para solicitar la conversión de la región en entidad territorial. La decisión tomada por el Congreso se someterá en cada caso a referendo de los ciudadanos de los departamentos interesados. La misma ley establecerá las atribuciones, los órganos de administración, y los recursos de las regiones y su participación en el manejo de los ingresos provenientes del Fondo Nacional de Regalías. Igualmente, definirá los principios para la adopción del estatuto especial de cada región.',
  },
  {
    id: 308,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 308,
    content:
      'La ley podrá limitar las apropiaciones departamentales destinadas a honorarios de los diputados y a gastos de funcionamiento de las asambleas y de las contralorías departamentales',
  },
  {
    id: 309,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 309,
    content:
      'Erígense en departamento las intendencias de Arauca, Casanare, Putumayo, el Archipiélago de San Andrés, Providencia y Santa Catalina, y las comisarías del Amazonas, Guaviare, Guainía, Vaupés y Vichada. Los bienes y derechos que a cualquier título pertenecían a las intendencias y comisarías continuarán siendo de propiedad de los respectivos departamentos.',
  },
  {
    id: 310,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 2,
    chapter: 'DEL RÉGIMEN DEPARTAMENTAL',
    articleNumber: 310,
    content:
      'El departamento Archipiélago de San Andrés, Providencia y Santa Catalina se regirá, además de las normas previstas en la Constitución y las leyes para los otros departamentos, por las normas especiales que en materia administrativa, de inmigración, fiscal, de comercio exterior, de cambios, financiera y de fomento económico establezca el legislador. Mediante ley aprobada por la mayoría de los miembros de cada cámara se podrá limitar el ejercicio de los derechos de circulación y residencia, establecer controles a la densidad de la población, regular el uso del suelo y someter a condiciones especiales la enajenación de bienes inmuebles con el fin de proteger la identidad cultural de las comunidades nativas y preservar el ambiente y los recursos naturales del Archipiélago. Mediante la creación de los municipios a que hubiere lugar, la Asamblea Departamental garantizará la expresión institucional de las comunidades raizales de San Andrés. El municipio de Providencia tendrá en las rentas departamentales una participación no inferior del 20% del valor total de dichas rentas.',
  },
  {
    id: 311,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 3,
    chapter: 'DEL RÉGIMEN MUNICIPAL',
    articleNumber: 311,
    content:
      'Al municipio como entidad fundamental de la división político-administrativa del Estado le corresponde prestar los servicios públicos que determine la ley, construir las obras que demande el progreso local, ordenar el desarrollo de su territorio, promover la participación comunitaria, el mejoramiento social y cultural de sus habitantes y cumplir las demás funciones que le asignen la Constitución y las leyes',
  },
  {
    id: 312,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 3,
    chapter: 'DEL RÉGIMEN MUNICIPAL',
    articleNumber: 312,
    content:
      'Acto Legislativo 01 de 2007, artículo 5°. El artículo 312 de la Constitución Política de Colombia quedará así: En cada municipio habrá una corporación político-administrativa elegida popularmente para períodos de cuatro (4) años que se denominará concejo municipal, integrado por no menos de 7, ni más de 21 miembros según lo determine la ley, de acuerdo con la población respectiva. Esta corporación podrá ejercer control político sobre la administración municipal. La ley determinará las calidades, inhabilidades, e incompatibilidades de los concejales y la época de sesiones ordinarias de los concejos. Los concejales no tendrán la calidad de empleados públicos. La ley podrá determinar los casos en que tengan derecho a honorarios por su asistencia a sesiones. Su aceptación de cualquier empleo público constituye falta absoluta.',
  },
  {
    id: 313,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 3,
    chapter: 'DEL RÉGIMEN MUNICIPAL',
    articleNumber: 313,
    content:
      'Corresponde a los concejos: 1. Reglamentar las funciones y la eficiente prestación de los servicios a cargo del municipio. 2. Adoptar los correspondientes planes y programas de desarrollo económico y social y de obras públicas. 3. Autorizar al alcalde para celebrar contratos y ejercer pro témpore precisas funciones de las que corresponden al Concejo. 4. Votar de conformidad con la Constitución y la ley los tributos y los gastos locales. 5. Dictar las normas orgánicas del presupuesto y expedir anualmente el presupuesto de rentas y gastos. 6. Determinar la estructura de la administración municipal y las funciones de sus dependencias; las escalas de remuneración correspondientes a las distintas categorías de empleos; crear, a iniciativa del alcalde, establecimientos públicos y empresas industriales o comerciales y autorizar la constitución de sociedades de economía mixta. 7. Reglamentar los usos del suelo y, dentro de los límites que fije la ley, vigilar y controlar las actividades relacionadas con la construcción y enajenación de inmuebles destinados a vivienda. 8. Elegir Personero para el período que fije la ley y los demás funcionarios que esta determine. 9. Dictar las normas necesarias para el control, la preservación y defensa del patrimonio ecológico y cultural del municipio. 10. Las demás que la Constitución y la ley le asignen. Acto Legislativo 01 de 2007, artículo 6°. Adiciónese al artículo 313 de la Constitución Política de Colombia con estos numerales. 11. En las capitales de los departamentos y los municipios con población mayor de veinticinco mil habitantes, citar y requerir a los secretarios del despacho del alcalde para que concurran a las sesiones. Las citaciones deberán hacerse con una anticipación no menor de cinco (5) días y formularse en cuestionario escrito. En caso de que los Secretarios no concurran, sin excusa aceptada por el Concejo Distrital o Municipal, este podrá proponer moción de censura. Los Secretarios deberán ser oídos en la sesión para la cual fueron citados, sin perjuicio de que el debate continúe en las sesiones posteriores por decisión del concejo. El debate no podrá extenderse a asuntos ajenos al cuestionario y deberá encabezar el orden del día de la sesión. Los concejos de los demás municipios, podrán citar y requerir a los Secretarios del Despacho del Alcalde para que concurran a las sesiones. Las citaciones deberán hacerse con una anticipación no menor de cinco (5) días y formularse en cuestionario escrito. En caso de que los Secretarios no concurran, sin excusa aceptada por el Concejo Distrital o Municipal, cualquiera de sus miembros podrá proponer moción de observaciones que no conlleva al retiro del funcionario correspondiente. Su aprobación requerirá el voto afirmativo de las dos terceras partes de los miembros que integran la corporación. 12. Proponer moción de censura respecto de los Secretarios del Despacho del Alcalde por asuntos relacionados con funciones propias del cargo o por desatención a los requerimientos y citaciones del Concejo Distrital o Municipal. La moción de censura deberá ser propuesta por la mitad más uno de los miembros que componen el Concejo Distrital o Municipal. La votación se hará entre el tercero y el décimo día siguientes a la terminación del debate, con audiencia pública del funcionario respectivo. Su aprobación requerirá el voto afirmativo de las dos terceras partes de los miembros que integran la Corporación. Una vez aprobada, el funcionario quedará separado de su cargo. Si fuere rechazada, no podrá presentarse otra sobre la misma materia a menos que la motiven hechos nuevos. La renuncia del funcionario respecto del cual se haya promovido moción de censura no obsta para que la misma sea aprobada conforme a lo previsto en este artículo.',
  },
  {
    id: 314,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 3,
    chapter: 'DEL RÉGIMEN MUNICIPAL',
    articleNumber: 314,
    content:
      'Acto Legislativo 02 de 2002, artículo 3°. El artículo 314 de la Constitución Política quedará así: En cada municipio habrá un alcalde, jefe de la administración local y representante legal del municipio, que será elegido popularmente para períodos institucionales de cuatro (4) años, y no podrá ser reelegido para el período siguiente. Siempre que se presente falta absoluta a más de dieciocho (18) meses de la terminación del período, se elegirá alcalde para el tiempo que reste. En caso de que faltare menos de dieciocho (18) meses, el gobernador designará un alcalde para lo que reste del período, respetando el partido, grupo político o coalición por el cual fue inscrito el alcalde elegido. El presidente y los gobernadores, en los casos taxativamente señalados por la ley, suspenderán o destituirán a los alcaldes. La ley establecerá las sanciones a que hubiere lugar por el ejercicio indebido de esta atribución.',
  },
  {
    id: 315,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 3,
    chapter: 'DEL RÉGIMEN MUNICIPAL',
    articleNumber: 315,
    content:
      'Son atribuciones del alcalde: 1. Cumplir y hacer cumplir la Constitución, la ley, los decretos del gobierno, las ordenanzas, y los acuerdos del concejo. 2. Conservar el orden público en el municipio, de conformidad con la ley y las instrucciones y órdenes que reciba del Presidente de la República y del respectivo gobernador. El alcalde es la primera autoridad de policía del municipio. La Policía Nacional cumplirá con prontitud y diligencia las órdenes que le imparta el alcalde por conducto del respectivo comandante. 3. Dirigir la acción administrativa del municipio; asegurar el cumplimiento de las funciones y la prestación de los servicios a su cargo; representarlo judicial y extrajudicialmente; y nombrar y remover a los funcionarios bajo su dependencia y a los gerentes o directores de los establecimientos públicos y las empresas industriales o comerciales de carácter local, de acuerdo con las disposiciones pertinentes. 4. Suprimir o fusionar entidades y dependencias municipales, de conformidad con los acuerdos respectivos. 5. Presentar oportunamente al Concejo los proyectos de acuerdo sobre planes y programas de desarrollo económico y social, obras públicas, presupuesto anual de rentas y gastos y los demás que estime convenientes para la buena marcha del municipio. 6. Sancionar y promulgar los acuerdos que hubiere aprobado el Concejo y objetar los que considere inconvenientes o contrarios al ordenamiento jurídico. 7. Crear, suprimir o fusionar los empleos de sus dependencias, señalarles funciones especiales y fijar sus emolumentos con arreglo a los acuerdos correspondientes. No podrá crear obligaciones que excedan el monto global fijado para gastos de personal en el presupuesto inicialmente aprobado. 8. Colaborar con el Concejo para el buen desempeño de sus funciones, presentarle informes generales sobre su administración y convocarlo a sesiones extraordinarias, en las que solo se ocupará de los temas y materias para los cuales fue citado. 9. Ordenar los gastos municipales de acuerdo con el plan de inversión y el presupuesto. 10. Las demás que la Constitución y la ley le señalen',
  },
  {
    id: 316,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 3,
    chapter: 'DEL RÉGIMEN MUNICIPAL',
    articleNumber: 316,
    content:
      'En las votaciones que se realicen para la elección de autoridades locales y para la decisión de asuntos del mismo carácter, solo podrán participar los ciudadanos residentes en el respectivo municipio.',
  },
  {
    id: 317,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 3,
    chapter: 'DEL RÉGIMEN MUNICIPAL',
    articleNumber: 317,
    content:
      'Solo los municipios podrán gravar la propiedad inmueble. Lo anterior no obsta para que otras entidades impongan contribución de valorización. La ley destinará un porcentaje de estos tributos, que no podrá exceder del promedio de las sobretasas existentes, a las entidades encargadas del manejo y conservación del ambiente y de los recursos naturales renovables, de acuerdo con los planes de desarrollo de los municipios del área de su jurisdicción',
  },
  {
    id: 318,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 3,
    chapter: 'DEL RÉGIMEN MUNICIPAL',
    articleNumber: 318,
    content:
      'Con el fin de mejorar la prestación de los servicios y asegurar la participación de la ciudadanía en el manejo de los asuntos públicos de carácter local, los concejos podrán dividir sus municipios en comunas cuando se trate de áreas urbanas, y en corregimientos en el caso de las zonas rurales. En cada una de las comunas o corregimientos habrá una junta administradora local de elección popular, integrada por el número de miembros que determine la ley, que tendrá las siguientes funciones: 1. Participar en la elaboración de los planes y programas municipales de desarrollo económico y social y de obras públicas. 2. Vigilar y controlar la prestación de los servicios municipales en su comuna o corregimiento y las inversiones que se realicen con recursos públicos. 3. Formular propuestas de inversión ante las autoridades nacionales, departamentales y municipales encargadas de la elaboración de los respectivos planes de inversión. 4. Distribuir las partidas globales que les asigne el presupuesto municipal. 5. Ejercer las funciones que les deleguen el concejo y otras autoridades locales. Las asambleas departamentales podrán organizar juntas administradoras para el cumplimiento de las funciones que les señale el acto de su creación en el territorio que este mismo determine. Acto Legislativo 02 de 2002, artículo 6°: El período de los miembros de las Juntas Administradoras locales a las que se refiere el artículo 318 de la Constitución Política será de cuatro años. Las normas sobre períodos de alcaldes y concejales municipales de este acto legislativo se aplicarán también a los de los Distritos.',
  },
  {
    id: 319,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 3,
    chapter: 'DEL RÉGIMEN MUNICIPAL',
    articleNumber: 319,
    content:
      'Cuando dos o más municipios tengan relaciones económicas, sociales y físicas, que den al conjunto características de un área metropolitana, podrán organizarse como entidad administrativa encargada de programar y coordinar el desarrollo armónico e integrado del territorio colocado bajo su autoridad; racionalizar la prestación de los servicios públicos a cargo de quienes la integran y, si es el caso, prestar en común algunos de ellos; y ejecutar obras de interés metropolitano. La ley de ordenamiento territorial adoptará para las áreas metropolitanas un régimen administrativo y fiscal de carácter especial; garantizará que en sus órganos de administración tengan adecuada participación las respectivas autoridades municipales; y señalará la forma de convocar y realizar las consultas populares que decidan la vinculación de los municipios. Cumplida la consulta popular, los respectivos alcaldes y los concejos municipales protocolizarán la conformación del área y definirán sus atribuciones, financiación y autoridades, de acuerdo con la ley. Las áreas metropolitanas podrán convertirse en Distritos conforme a la ley',
  },
  {
    id: 320,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 3,
    chapter: 'DEL RÉGIMEN MUNICIPAL',
    articleNumber: 320,
    content:
      'La ley podrá establecer categorías de municipios de acuerdo con su población, recursos fiscales, importancia económica y situación geográfica, y señalar distinto régimen para su organización, gobierno y administración',
  },
  {
    id: 321,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 3,
    chapter: 'DEL RÉGIMEN MUNICIPAL',
    articleNumber: 321,
    content:
      'Las provincias se constituyen con municipios o territorios indígenas circunvecinos, pertenecientes a un mismo departamento. La ley dictará el estatuto básico y fijará el régimen administrativo de las provincias que podrán organizarse para el cumplimiento de las funciones que les deleguen entidades nacionales o departamentales y que les asignen la ley y los municipios que las integran. Las provincias serán creadas por ordenanza, a iniciativa del gobernador, de los alcaldes de los respectivos municipios o del número de ciudadanos que determine la ley. Para el ingreso a una provincia ya constituida deberá realizarse una consulta popular en los municipios interesados. El departamento y los municipios aportarán a las provincias el porcentaje de sus ingresos corrientes que determinen la asamblea y los concejos respectivos.',
  },
  {
    id: 322,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 4,
    chapter: 'DEL RÉGIMEN ESPECIAL',
    articleNumber: 322,
    content:
      'Acto Legislativo 01 de 2000, artículo 1°. El inciso 1° del artículo 322 de la Constitución Política, quedará así: Bogotá, capital de la República y el departamento de Cundinamarca, se organiza como Distrito Capital. Su régimen político, fiscal y administrativo será el que determinen la Constitución, las leyes especiales que para el mismo se dicten y las disposiciones vigentes para los municipios. Con base en las normas generales que establezca la ley, el concejo a iniciativa del alcalde, dividirá el territorio distrital en localidades, de acuerdo con las características sociales de sus habitantes, y hará el correspondiente reparto de competencias y funciones administrativas. A las autoridades distritales corresponderá garantizar el desarrollo armónico e integrado de la ciudad y la eficiente prestación de los servicios a cargo del Distrito; a las locales, la gestión de los asuntos propios de su territorio.',
  },
  {
    id: 323,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 4,
    chapter: 'DEL RÉGIMEN ESPECIAL',
    articleNumber: 323,
    content:
      'Acto Legislativo 02 de 2002, artículo 5°. El artículo 323 de la Constitución Política quedará así: Acto Legislativo 03 de 2007, artículo 1°. El inciso 1° del artículo 323 de la Constitución Política quedará así: El Concejo Distrital se compondrá de cuarenta y cinco (45) concejales. En cada una de las localidades habrá una junta administradora elegida popularmente para períodos de cuatro (4) años que estará integrada por no menos de siete ediles, según lo determine el concejo distrital, atendida la población respectiva. La elección de Alcalde Mayor, de concejales distritales y de ediles se hará en un mismo día por períodos de cuatro (4) años y el alcalde no podrá ser reelegido para el período siguiente. Siempre que se presente falta absoluta a más de dieciocho (18) meses de la terminación del período, se elegirá alcalde mayor para el tiempo que reste. En caso de que faltare menos de dieciocho (18) meses, el Presidente de la República designará alcalde mayor para lo que reste del período, respetando el partido, grupo político o coalición por el cual fue inscrito el alcalde elegido. Los alcaldes locales serán designados por el alcalde mayor de terna enviada por la correspondiente junta administradora. En los casos taxativamente señalados por la ley, el Presidente de la República suspenderá o destituirá al Alcalde Mayor. Los concejales y los ediles no podrán hacer parte de las juntas directivas de las entidades descentralizadas.',
  },
  {
    id: 324,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 4,
    chapter: 'DEL RÉGIMEN ESPECIAL',
    articleNumber: 324,
    content:
      'Las juntas administradoras locales distribuirán y apropiarán las partidas globales que en el presupuesto anual del Distrito se asignen a las localidades teniendo en cuenta las necesidades básicas insatisfechas de su población. Sobre las rentas departamentales que se causen en Santa Fe de Bogotá, la ley determinará la participación que le corresponda a la capital de la República. Tal participación no podrá ser superior a la establecida en la fecha de vigencia de esta Constitución.',
  },
  {
    id: 325,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 4,
    chapter: 'DEL RÉGIMEN ESPECIAL',
    articleNumber: 325,
    content:
      'Con el fin de garantizar la ejecución de planes y programas de desarrollo integral y la prestación oportuna y eficiente de los servicios a su cargo, dentro de las condiciones que fijen la Constitución y la ley, el Distrito Capital podrá conformar un área metropolitana con los municipios circunvecinos y una región con otras entidades territoriales de carácter departamental.',
  },
  {
    id: 326,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 4,
    chapter: 'DEL RÉGIMEN ESPECIAL',
    articleNumber: 326,
    content:
      'Los municipios circunvecinos podrán incorporarse al Distrito Capital si así lo determinan los ciudadanos que residan en ellos mediante votación que tendrá lugar cuando el concejo distrital haya manifestado su acuerdo con esta vinculación. Si esta ocurre, al antiguo municipio se le aplicarán las normas constitucionales y legales vigentes para las demás localidades que conformen el Distrito Capital.',
  },
  {
    id: 327,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 4,
    chapter: 'DEL RÉGIMEN ESPECIAL',
    articleNumber: 327,
    content:
      'En las elecciones de Gobernador y de diputados a la Asamblea Departamental de Cundinamarca no participarán los ciudadanos inscritos en el censo electoral del Distrito Capital.',
  },
  {
    id: 328,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 4,
    chapter: 'DEL RÉGIMEN ESPECIAL',
    articleNumber: 328,
    content:
      'Acto Legislativo 02 de 2007, artículo 2°. El artículo 328 de la Constitución Política quedará así: El Distrito Turístico y Cultural de Cartagena de Indias, el Distrito Turístico, Cultural e Histórico de Santa Marta y Barranquilla conservarán su régimen y carácter, y se organiza a Buenaventura y Tumaco como Distrito Especial, Industrial, Portuario, Biodiverso y Ecoturismo.',
  },
  {
    id: 329,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 4,
    chapter: 'DEL RÉGIMEN ESPECIAL',
    articleNumber: 329,
    content:
      'La conformación de las entidades territoriales indígenas se hará con sujeción a lo dispuesto en la Ley Orgánica de Ordenamiento Territorial, y su delimitación se hará por el Gobierno nacional, con participación de los representantes de las comunidades indígenas, previo concepto de la Comisión de Ordenamiento Territorial. Los resguardos son de propiedad colectiva y no enajenable. La ley definirá las relaciones y la coordinación de estas entidades con aquellas de las cuales formen parte. Parágrafo. En el caso de un territorio indígena que comprenda el territorio de dos o más departamentos, su administración se hará por los consejos indígenas en coordinación con los gobernadores de los respectivos departamentos. En caso de que este territorio decida constituirse como entidad territorial, se hará con el cumplimiento de los requisitos establecidos en el inciso 1° de este artículo.',
  },
  {
    id: 330,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 4,
    chapter: 'DEL RÉGIMEN ESPECIAL',
    articleNumber: 330,
    content:
      'De conformidad con la Constitución y las leyes, los territorios indígenas estarán gobernados por consejos conformados y reglamentados según los usos y costumbres de sus comunidades y ejercerán las siguientes funciones: 1. Velar por la aplicación de las normas legales sobre usos del suelo y poblamiento de sus territorios. 2. Diseñar las políticas y los planes y programas de desarrollo económico y social dentro de su territorio, en armonía con el Plan Nacional de Desarrollo. 3. Promover las inversiones públicas en sus territorios y velar por su debida ejecución. 4. Percibir y distribuir sus recursos. 5. Velar por la preservación de los recursos naturales. 6. Coordinar los programas y proyectos promovidos por las diferentes comunidades en su territorio. 7. Colaborar con el mantenimiento del orden público dentro de su territorio de acuerdo con las instrucciones y disposiciones del Gobierno nacional. 8. Representar a los territorios ante el Gobierno nacional y las demás entidades a las cuales se integren; y 9. Las que les señalen la Constitución y la ley. Parágrafo. La explotación de los recursos naturales en los territorios indígenas se hará sin desmedro de la integridad cultural, social y económica de las comunidades indígenas. En las decisiones que se adopten respecto de dicha explotación, el Gobierno propiciará la participación de los representantes de las respectivas comunidades.',
  },
  {
    id: 331,
    titleNumber: 11,
    title: 'DE LA ORGANIZACIÓN TERRITORIAL',
    chapterNumber: 4,
    chapter: 'DEL RÉGIMEN ESPECIAL',
    articleNumber: 331,
    content:
      'Créase la Corporación Autónoma Regional del Río Grande de la Magdalena encargada de la recuperación de la navegación, de la actividad portuaria, la adecuación y la conservación de tierras, la generación y distribución de energía y el aprovechamiento y preservación del ambiente, los recursos ictiológicos y demás recursos naturales renovables. La ley determinará su organización y fuentes de financiación, y definirá en favor de los municipios ribereños un tratamiento especial en la asignación de regalías y en la participación que les corresponda en los ingresos corrientes de la nación.',
  },
  {
    id: 332,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 332,
    content:
      'El Estado es propietario del subsuelo y de los recursos naturales no renovables, sin perjuicio de los derechos adquiridos y perfeccionados con arreglo a las leyes preexistentes.',
  },
  {
    id: 333,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 333,
    content:
      'La actividad económica y la iniciativa privada son libres, dentro de los límites del bien común. Para su ejercicio, nadie podrá exigir permisos previos ni requisitos, sin autorización de la ley. La libre competencia económica es un derecho de todos que supone responsabilidades. La empresa, como base del desarrollo, tiene una función social que implica obligaciones. El Estado fortalecerá las organizaciones solidarias y estimulará el desarrollo empresarial. El Estado, por mandato de la ley, impedirá que se obstruya o se restrinja la libertad económica y evitará o controlará cualquier abuso que personas o empresas hagan de su posición dominante en el mercado nacional. La ley delimitará el alcance de la libertad económica cuando así lo exijan el interés social, el ambiente y el patrimonio cultural de la nación.',
  },
  {
    id: 334,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 334,
    content:
      'Acto Legislativo 03 de 2011, artículo 1°. El artículo 334 de la Constitución Política quedará así: La dirección general de la economía estará a cargo del Estado. Este intervendrá, por mandato de la ley, en la explotación de los recursos naturales, en el uso del suelo, en la producción, distribución, utilización y consumo de los bienes, y en los servicios públicos y privados, para racionalizar la economía con el fin de conseguir en el plano nacional y territorial, en un marco de sostenibilidad fiscal, el mejoramiento de la calidad de vida de los habitantes, la distribución equitativa de las oportunidades y los beneficios del desarrollo y la preservación de un ambiente sano. Dicho marco de sostenibilidad fiscal deberá fungir como instrumento para alcanzar de manera progresiva los objetivos del Estado Social de Derecho. En cualquier caso el gasto público social será prioritario. El Estado, de manera especial, intervendrá para dar pleno empleo a los recursos humanos y asegurar, de manera progresiva, que todas las personas, en particular las de menores ingresos, tengan acceso efectivo al conjunto de los bienes y servicios básicos. También para promover la productividad y competitividad y el desarrollo armónico de las regiones. La sostenibilidad fiscal debe orientar a las Ramas y Órganos del Poder Público, dentro de sus competencias, en un marco de colaboración armónica. El Procurador General de la Nación o uno de los Ministros del Gobierno, una vez proferida la sentencia por cualquiera de las máximas corporaciones judiciales, podrán solicitar la apertura de un Incidente de Impacto Fiscal, cuyo trámite será obligatorio. Se oirán las explicaciones de los proponentes sobre las consecuencias de la sentencia en las finanzas públicas, así como el plan concreto para su cumplimiento y se decidirá si procede modular, modificar o diferir los efectos de la misma, con el objeto de evitar alteraciones serias de la sostenibilidad fiscal. En ningún caso se afectará el núcleo esencial de los derechos fundamentales. Parágrafo. Al interpretar el presente artículo, bajo ninguna circunstancia, autoridad alguna de naturaleza administrativa, legislativa o judicial, podrá invocar la sostenibilidad fiscal para menoscabar los derechos fundamentales, restringir su alcance o negar su protección efectiva.',
  },
  {
    id: 335,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 335,
    content:
      'Las actividades financiera, bursátil, aseguradora y cualquier otra relacionada con el manejo, aprovechamiento e inversión de los recursos de captación a las que se refiere el literal d) del numeral 19 del artículo 150 son de interés público y solo pueden ser ejercidas previa autorización del Estado, conforme a la ley, la cual regulará la forma de intervención del Gobierno en estas materias y promoverá la democratización del crédito.',
  },
  {
    id: 336,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 336,
    content:
      'Ningún monopolio podrá establecerse sino como arbitrio rentístico, con una finalidad de interés público o social y en virtud de la ley. La ley que establezca un monopolio no podrá aplicarse antes de que hayan sido plenamente indemnizados los individuos que en virtud de ella deban quedar privados del ejercicio de una actividad económica lícita. La organización, administración, control y explotación de los monopolios rentísticos estarán sometidos a un régimen propio, fijado por la ley de iniciativa gubernamental. Las rentas obtenidas en el ejercicio de los monopolios de suerte y azar estarán destinadas exclusivamente a los servicios de salud. Las rentas obtenidas en el ejercicio del monopolio de licores, estarán destinadas preferentemente a los servicios de salud y educación. La evasión fiscal en materia de rentas provenientes de monopolios rentísticos será sancionada penalmente en los términos que establezca la ley. El Gobierno enajenará o liquidará las empresas monopolísticas del Estado y otorgará a terceros el desarrollo de su actividad cuando no cumplan los requisitos de eficiencia, en los términos que determine la ley. En cualquier caso se respetarán los derechos adquiridos por los trabajadores.',
  },
  {
    id: 337,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 337,
    content:
      'La Ley podrá establecer para las zonas de frontera, terrestres y marítimas, normas especiales en materias económicas y sociales tendientes a promover su desarrollo.',
  },
  {
    id: 338,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 1,
    chapter: 'DE LAS DISPOSICIONES GENERALES',
    articleNumber: 338,
    content:
      'En tiempo de paz, solamente el Congreso, las asambleas departamentales y los concejos distritales y municipales podrán imponer contribuciones fiscales o parafiscales. La ley, las ordenanzas y los acuerdos deben fijar, directamente, los sujetos activos y pasivos, los hechos y las bases gravables, y las tarifas de los impuestos. La ley, las ordenanzas y los acuerdos pueden permitir que las autoridades fijen la tarifa de las tasas y contribuciones que cobren a los contribuyentes, como recuperación de los costos de los servicios que les presten o participación en los beneficios que les proporcionen; pero el sistema y el método para definir tales costos y beneficios, y la forma de hacer su reparto, deben ser fijados por la ley, las ordenanzas o los acuerdos. Las leyes, ordenanzas o acuerdos que regulen contribuciones en las que la base sea el resultado de hechos ocurridos durante un período determinado, no pueden aplicarse sino a partir del período que comience después de iniciar la vigencia de la respectiva ley, ordenanza o acuerdo.',
  },
  {
    id: 339,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 2,
    chapter: 'DE LOS PLANES DE DESARROLLO',
    articleNumber: 339,
    content:
      'Acto Legislativo 03 de 2011, artículo 2°. El primer inciso del artículo 339 de la Constitución Política quedará así: Habrá un Plan Nacional de Desarrollo conformado por una parte general y un plan de inversiones de las entidades públicas del orden nacional. En la parte general se señalarán los propósitos y objetivos nacionales de largo plazo, las metas y prioridades de la acción estatal a mediano plazo y las estrategias y orientaciones generales de la política económica, social y ambiental que serán adoptadas por el Gobierno. El plan de inversiones públicas contendrá los presupuestos plurianuales de los principales programas y proyectos de inversión pública nacional y la especificación de los recursos financieros requeridos para su ejecución, dentro de un marco que garantice la sostenibilidad fiscal. Las entidades territoriales elaborarán y adoptarán de manera concertada entre ellas y el Gobierno nacional, planes de desarrollo, con el objeto de asegurar el uso eficiente de sus recursos y el desempeño adecuado de las funciones que les hayan sido asignadas por la Constitución y la ley. Los planes de las entidades territoriales estarán conformados por una parte estratégica y un plan de inversiones de mediano y corto plazo.',
  },
  {
    id: 340,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 2,
    chapter: 'DE LOS PLANES DE DESARROLLO',
    articleNumber: 340,
    content:
      'Habrá un Consejo Nacional de Planeación integrado por representantes de las entidades territoriales y de los sectores económicos, sociales, ecológicos, comunitarios y culturales. El Consejo tendrá carácter consultivo y servirá de foro para la discusión del Plan Nacional de Desarrollo. Los miembros del Consejo Nacional serán designados por el Presidente de la República de listas que le presenten las autoridades y las organizaciones de las entidades y sectores a que se refiere el inciso anterior, quienes deberán estar o haber estado vinculados a dichas actividades. Su período será de ocho años y cada cuatro se renovará parcialmente en la forma que establezca la ley. En las entidades territoriales habrá también consejos de planeación, según lo determine la ley. El Consejo Nacional y los consejos territoriales de planeación constituyen el Sistema Nacional de Planeación.',
  },
  {
    id: 341,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 2,
    chapter: 'DE LOS PLANES DE DESARROLLO',
    articleNumber: 341,
    content:
      'El gobierno elaborará el Plan Nacional de Desarrollo con participación activa de las autoridades de planeación, de las entidades territoriales y del *Consejo de Gobierno Judicial y someterá el proyecto correspondiente al concepto del Consejo Nacional de Planeación; oída la opinión del Consejo procederá a efectuar las enmiendas que considere pertinentes y presentará el proyecto a consideración del Congreso, dentro de los seis meses siguientes a la iniciación del período presidencial respectivo. *Acto Legislativo 02 de 2015, artículo 26. Concordancias, vigencias y derogatorias. Sustitúyase la expresión “Consejo Superior de la Judicatura” con “Consejo de Gobierno Judicial” en el artículo 341 de la Constitución Política. Con fundamento en el informe que elaboren las comisiones conjuntas de asuntos económicos, cada corporación discutirá y evaluará el plan en sesión plenaria. Los desacuerdos con el contenido de la parte general, si los hubiere, no serán obstáculo para que el gobierno ejecute las políticas propuestas en lo que sea de su competencia. No obstante, cuando el gobierno decida modificar la parte general del plan deberá seguir el procedimiento indicado en el artículo siguiente. El Plan Nacional de Inversiones se expedirá mediante una ley que tendrá prelación sobre las demás leyes; en consecuencia, sus mandatos constituirán mecanismos idóneos para su ejecución y suplirán los existentes sin necesidad de la expedición de leyes posteriores, con todo, en las leyes anuales de presupuesto se podrán aumentar o disminuir las partidas y recursos aprobados en la ley del plan. Si el Congreso no aprueba el Plan Nacional de Inversiones Públicas en un término de tres meses después de presentado, el gobierno podrá ponerlo en vigencia mediante decreto con fuerza de ley. El Congreso podrá modificar el Plan de Inversiones Públicas siempre y cuando se mantenga el equilibrio financiero. Cualquier incremento en las autorizaciones de endeudamiento solicitadas en el proyecto gubernamental o inclusión de proyectos de inversión no contemplados en él, requerirá el visto bueno del Gobierno nacional.',
  },
  {
    id: 342,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 2,
    chapter: 'DE LOS PLANES DE DESARROLLO',
    articleNumber: 342,
    content:
      'La correspondiente ley orgánica reglamentará todo lo relacionado con los procedimientos de elaboración, aprobación y ejecución de los planes de desarrollo y dispondrá los mecanismos apropiados para su armonización y para la sujeción a ellos de los presupuestos oficiales. Determinará, igualmente, la organización y funciones del Consejo Nacional de Planeación y de los consejos territoriales, así como los procedimientos conforme a los cuales se hará efectiva la participación ciudadana en la discusión de los planes de desarrollo, y las modificaciones correspondientes, conforme a lo establecido en la Constitución.',
  },
  {
    id: 343,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 2,
    chapter: 'DE LOS PLANES DE DESARROLLO',
    articleNumber: 343,
    content:
      'La entidad nacional de planeación que señale la ley, tendrá a su cargo el diseño y la organización de los sistemas de evaluación de gestión y resultados de la administración pública, tanto en lo relacionado con políticas como con proyectos de inversión, en las condiciones que ella determine.',
  },
  {
    id: 344,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 2,
    chapter: 'DE LOS PLANES DE DESARROLLO',
    articleNumber: 344,
    content:
      'Los organismos departamentales de planeación harán la evaluación de gestión y resultados sobre los planes y programas de desarrollo e inversión de los departamentos y municipios, y participarán en la preparación de los presupuestos de estos últimos en los términos que señale la ley. En todo caso el organismo nacional de planeación, de manera selectiva, podrá ejercer dicha evaluación sobre cualquier entidad territorial.',
  },
  {
    id: 345,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 3,
    chapter: 'DEL PRESUPUESTO',
    articleNumber: 345,
    content:
      'En tiempo de paz no se podrá percibir contribución o impuesto que no figure en el presupuesto de rentas, ni hacer erogación con cargo al tesoro que no se halle incluida en el de gastos. Tampoco podrá hacerse ningún gasto público que no haya sido decretado por el Congreso, por las asambleas departamentales, o por los concejos distritales o municipales, ni transferir crédito alguno a objeto no previsto en el respectivo presupuesto.',
  },
  {
    id: 346,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 3,
    chapter: 'DEL PRESUPUESTO',
    articleNumber: 346,
    content:
      'Acto Legislativo 03 de 2011, artículo 3°. El primer inciso del artículo 346 de la Constitución Política quedará así: El Gobierno formulará anualmente el presupuesto de rentas y ley de apropiaciones, que será presentado al Congreso dentro de los primeros diez días de cada legislatura. El presupuesto de rentas y ley de apropiaciones deberá elaborarse, presentarse y aprobarse dentro de un marco de sostenibilidad fiscal y corresponder al Plan Nacional de Desarrollo. En la Ley de Apropiaciones no podrá incluirse partida alguna que no corresponda a un crédito judicialmente reconocido, o a un gasto decretado conforme a ley anterior, o a uno propuesto por el Gobierno para atender debidamente el funcionamiento de las ramas del poder público, o al servicio de la deuda, o destinado a dar cumplimiento al Plan Nacional de Desarrollo. Las comisiones de asuntos económicos de las dos Cámaras deliberarán en forma conjunta para dar primer debate al proyecto de Presupuesto de Rentas y Ley de Apropiaciones.',
  },
  {
    id: 347,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 3,
    chapter: 'DEL PRESUPUESTO',
    articleNumber: 347,
    content:
      'El proyecto de ley de apropiaciones deberá contener la totalidad de los gastos que el Estado pretenda realizar durante la vigencia fiscal respectiva. Si los ingresos legalmente autorizados no fueren suficientes para atender los gastos proyectados, el Gobierno propondrá, por separado, ante las mismas comisiones que estudian el proyecto de ley del presupuesto, la creación de nuevas rentas o la modificación de las existentes para financiar el monto de gastos contemplados. El presupuesto podrá aprobarse sin que se hubiere perfeccionado el proyecto de ley referente a los recursos adicionales, cuyo trámite podrá continuar su curso en el período legislativo siguiente. Parágrafo transitorio. Acto Legislativo 01 de 2001, artículo 1°. Incluir un nuevo parágrafo al artículo 347 de la Constitución Política así: Durante los años 2002, 2003, 2004, 2005, 2006, 2007 y 2008 el monto total de las apropiaciones autorizadas por la ley anual de presupuesto para gastos generales, diferentes de los destinados al pago de pensiones, salud, gastos de defensa, servicios personales, al Sistema General de Participaciones y a otras transferencias que señale la ley, no podrá incrementarse de un año a otro, en un porcentaje superior al de la tasa de inflación causada para cada uno de ellos, más el uno punto cinco por ciento (1.5%). La restricción al monto de las apropiaciones, no se aplicará a las necesarias para atender gastos decretados con las facultades de los Estados de Excepción.',
  },
  {
    id: 348,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 3,
    chapter: 'DEL PRESUPUESTO',
    articleNumber: 348,
    content:
      'Si el Congreso no expidiere el presupuesto, regirá el presentado por el Gobierno dentro de los términos del artículo precedente; si el presupuesto no hubiere sido presentado dentro de dicho plazo, regirá el del año anterior, pero el Gobierno podrá reducir gastos, y, en consecuencia, suprimir o refundir empleos, cuando así lo aconsejen los cálculos de rentas del nuevo ejercicio.',
  },
  {
    id: 349,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 3,
    chapter: 'DEL PRESUPUESTO',
    articleNumber: 349,
    content:
      'Durante los tres primeros meses de cada legislatura, y estrictamente de acuerdo con las reglas de la Ley Orgánica, el Congreso discutirá y expedirá el Presupuesto General de Rentas y Ley de Apropiaciones. Los cómputos de las rentas, de los recursos del crédito y los provenientes del balance del tesoro, no podrán aumentarse por el Congreso sino con el concepto previo y favorable suscrito por el ministro del ramo.',
  },
  {
    id: 350,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 3,
    chapter: 'DEL PRESUPUESTO',
    articleNumber: 350,
    content:
      'La ley de apropiaciones deberá tener un componente denominado gasto público social que agrupará las partidas de tal naturaleza, según definición hecha por la ley orgánica respectiva. Excepto en los casos de guerra exterior o por razones de seguridad nacional, el gasto público social tendrá prioridad sobre cualquier otra asignación. En la distribución territorial del gasto público social se tendrá en cuenta el número de personas con necesidades básicas insatisfechas, la población, y la eficiencia fiscal y administrativa, según reglamentación que hará la ley. El presupuesto de inversión no se podrá disminuir porcentualmente con relación al año anterior respecto del gasto total de la correspondiente ley de apropiaciones.',
  },
  {
    id: 351,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 3,
    chapter: 'DEL PRESUPUESTO',
    articleNumber: 351,
    content:
      'El Congreso no podrá aumentar ninguna de las partidas del presupuesto de gastos propuestas por el Gobierno, ni incluir una nueva, sino con la aceptación escrita del ministro del ramo. El Congreso podrá eliminar o reducir partidas de gastos propuestas por el Gobierno, con excepción de las que se necesitan para el servicio de la deuda pública, las demás obligaciones contractuales del Estado, la atención completa de los servicios ordinarios de la administración y las inversiones autorizadas en los planes y programas a que se refiere el artículo 341. Si se elevare el cálculo de las rentas, o si se eliminaren o disminuyeren algunas de las partidas del proyecto respectivo, las sumas así disponibles, sin exceder su cuantía, podrán aplicarse a otras inversiones o gastos autorizados conforme a lo prescrito en el inciso final del artículo 349 de la Constitución.',
  },
  {
    id: 352,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 3,
    chapter: 'DEL PRESUPUESTO',
    articleNumber: 352,
    content:
      'Además de lo señalado en esta Constitución, la Ley Orgánica del Presupuesto regulará lo correspondiente a la programación, aprobación, modificación, ejecución de los presupuestos de la nación, de las entidades territoriales y de los entes descentralizados de cualquier nivel administrativo, y su coordinación con el Plan Nacional de Desarrollo, así como también la capacidad de los organismos y entidades estatales para contratar.',
  },
  {
    id: 353,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 3,
    chapter: 'DEL PRESUPUESTO',
    articleNumber: 353,
    content:
      'Los principios y las disposiciones establecidos en este título se aplicarán, en lo que fuere pertinente, a las entidades territoriales, para la elaboración, aprobación y ejecución de su presupuesto.',
  },
  {
    id: 354,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 3,
    chapter: 'DEL PRESUPUESTO',
    articleNumber: 354,
    content:
      'Habrá un Contador General, funcionario de la Rama Ejecutiva, quien llevará la contabilidad general de la nación y consolidará esta con la de sus entidades descentralizadas territorialmente o por servicios, cualquiera que sea el orden al que pertenezcan, excepto la referente a la ejecución del Presupuesto, cuya competencia se atribuye a la Contraloría. Corresponde al Contador General las funciones de uniformar, centralizar y consolidar la contabilidad pública, elaborar el balance general y determinar las normas contables que deben regir en el país, conforme a la ley. Parágrafo. Seis meses después de concluido el año fiscal, el Gobierno nacional enviará al Congreso el balance de la Hacienda, auditado por la Contraloría General de la República, para su conocimiento y análisis.',
  },
  {
    id: 355,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 3,
    chapter: 'DEL PRESUPUESTO',
    articleNumber: 355,
    content:
      'Ninguna de las ramas u órganos del poder público podrá decretar auxilios o donaciones en favor de personas naturales o jurídicas de derecho privado. El Gobierno, en los niveles nacional, departamental, distrital y municipal podrá, con recursos de los respectivos presupuestos, celebrar contratos con entidades privadas sin ánimo de lucro y de reconocida idoneidad con el fin de impulsar programas y actividades de interés público acordes con el Plan Nacional y los Planes Seccionales de Desarrollo. El Gobierno nacional reglamentará la materia.',
  },
  {
    id: 356,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 4,
    chapter: 'DE LA DISTRIBUCIÓN DE RECURSOS Y DE LAS COMPETENCIAS',
    articleNumber: 356,
    content:
      'Acto Legislativo 01 de 2001, artículo 2°. El artículo 356 de la Constitución Política quedará así: Salvo lo dispuesto por la Constitución, la ley, a iniciativa del Gobierno, fijará los servicios a cargo de la nación y de los departamentos, distritos, y municipios. Para efecto de atender los servicios a cargo de estos y a proveer los recursos para financiar adecuadamente su prestación, se crea el Sistema General de Participaciones de los departamentos, distritos y municipios. Los distritos tendrán las mismas competencias que los municipios y departamentos para efectos de la distribución del Sistema General de Participaciones que establezca la ley. Para estos efectos, serán beneficiarias las entidades territoriales indígenas, una vez constituidas. Asimismo, la ley establecerá como beneficiarios a los resguardos indígenas, siempre y cuando estos no se hayan constituido en entidad territorial indígena. Acto Legislativo 04 de 2007, artículo 1°. El inciso 4° del artículo 356 de la Constitución Política quedará así: Los recursos del Sistema General de Participaciones de los departamentos, distritos y municipios se destinarán a la financiación de los servicios a su cargo, dándoles prioridad al servicio de salud, los servicios de educación, preescolar, primaria, secundaria y media, y servicios públicos domiciliarios de agua potable y saneamiento básico, garantizando la prestación y la ampliación de coberturas con énfasis en la población pobre. Teniendo en cuenta los principios de solidaridad, complementariedad y subsidiariedad, la ley señalará los casos en los cuales la nación podrá concurrir a la financiación de los gastos en los servicios que sean señalados por la ley como de competencia de los departamentos, distritos y municipios. La ley reglamentará los criterios de distribución del Sistema General de Participaciones de los departamentos, distritos, y municipios, de acuerdo con las competencias que le asigne a cada una de estas entidades; y contendrá las disposiciones necesarias para poner en operación el Sistema General de Participaciones de estas, incorporando principios sobre distribución que tengan en cuenta los siguientes criterios: a) Acto Legislativo 04 de 2007, artículo 2°. El literal a) del artículo 356 de la Constitución Política quedará así: Para educación, salud y agua potable y saneamiento básico: población atendida y por atender, reparto entre población urbana y rural, eficiencia administrativa y fiscal, y equidad. En la distribución por entidad territorial de cada uno de los componentes del Sistema General de Participaciones, se dará prioridad a factores que favorezcan a la población pobre, en los términos que establezca la ley. b) Para otros sectores: población, reparto entre población y urbana y rural, eficiencia administrativa y fiscal, y pobreza relativa. No se podrá descentralizar competencias sin la previa asignación de los recursos fiscales suficientes para atenderlas. Los recursos del Sistema General de Participaciones de los departamentos, distritos, y municipios se distribuirán por sectores que defina la ley. El monto de recursos que se asigne para los sectores de salud y educación, no podrá ser inferior al que se transfería a la expedición del presente acto legislativo a cada uno de estos sectores. Parágrafo transitorio. El Gobierno deberá presentar el proyecto de ley que regule la organización y funcionamiento del Sistema General de Participaciones de los departamentos, distritos, y municipios, a más tardar el primer mes de sesiones del próximo periodo legislativo. Acto Legislativo 02 de 2007, artículo 1°. Adiciónese el siguiente párrafo al artículo 356 de la Constitución Política: La ciudad de Buenaventura se organiza como Distrito Especial, Industrial, Portuario, Biodiverso y Ecoturístico. Su régimen político, fiscal y administrativo será el que determine la Constitución y las leyes especiales, que para el efecto se dicten, y en lo no dispuesto en ellas, las normas vigentes para los municipios. Acto Legislativo 04 de 2007, artículo 3°. Adiciónense al artículo 356 de la Constitución Política los siguientes incisos: El Gobierno nacional definirá una estrategia de monitoreo, seguimiento y control integral al gasto ejecutado por las entidades territoriales con recursos del Sistema General de Participaciones, para asegurar el cumplimiento del metas de cobertura y calidad. Esta estrategia deberá fortalecer los espacios para la participación ciudadana en el control social y en los procesos de rendición de cuentas. Acto Legislativo 04 de 2007, artículo 3°. Adiciónense al artículo 356 de la Constitución Política los siguientes incisos: Para dar aplicación y cumplimiento a lo dispuesto en el inciso anterior, el Gobierno nacional, en un término no mayor a seis (6) meses contados a partir de la expedición del presente acto legislativo, regulará, entre otros aspectos, lo pertinente para definir los eventos en los cuales está en riesgo la prestación adecuada de los servicios a cargo de las entidades territoriales, las medidas que puede adoptar para evitar tal situación y la determinación efectiva de los correctivos necesarios a que haya lugar.',
  },
  {
    id: 357,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 4,
    chapter: 'DE LA DISTRIBUCIÓN DE RECURSOS Y DE LAS COMPETENCIAS',
    articleNumber: 357,
    content:
      'Acto Legislativo 04 de 2007, artículo 4°. El artículo 357 de la Constitución Política quedará así: El Sistema General de Participaciones de los departamentos, distritos y municipios se incrementará anualmente en un porcentaje igual al promedio de la variación porcentual que hayan tenido los ingresos corrientes de la nación durante los cuatro (4) años anteriores, incluido el correspondiente al aforo del presupuesto en ejecución. Para efectos del cálculo de la variación de los ingresos corrientes de la nación a que se refiere el inciso anterior, estarán excluidos los tributos que se arbitren por medidas de estado de excepción salvo que el Congreso, durante el año siguiente, les otorgue el carácter permanente. El diecisiete por ciento (17%) de los recursos de Propósito General del Sistema General de Participaciones, será distribuido entre los municipios con población inferior a 25.000 habitantes. Estos recursos se destinarán exclusivamente para inversión, conforme a las competencias asignadas por la ley. Estos recursos se distribuirán con base en los mismos criterios de población y pobreza definidos por la ley para la Participación de Propósito General. Los municipios clasificados en las categorías cuarta, quinta y sexta, de conformidad con las normas vigentes, podrán destinar libremente, para inversión y otros gastos inherentes al funcionamiento de la administración municipal, hasta un cuarenta y dos (42%) de los recursos que perciban por concepto del Sistema General de Participaciones de Propósito General, exceptuando los recursos que se distribuyan de acuerdo con el inciso anterior. Cuando una entidad territorial alcance coberturas universales y cumpla con los estándares de calidad establecidos por las autoridades competentes, en los sectores de educación, salud y/o servicios públicos domiciliarios de agua potable y saneamiento básico, previa certificación de la entidad nacional competente, podrá destinar los recursos excedentes a inversión en otros sectores de su competencia. El Gobierno nacional reglamentará la materia. Parágrafo transitorio 1°. El monto del Sistema General de Participaciones (SGP) de los departamentos, distritos y municipios se incrementará tomando como base el monto liquidado en la vigencia anterior. Durante los años 2008 y 2009 el SGP se incrementará en un porcentaje igual al de la tasa de inflación causada, más una tasa de crecimiento real de 4%. Durante el año 2010 el incremento será igual a la tasa de inflación causada, más una tasa de crecimiento real de 3.5%. Entre el año 2011 y el año 2016 el incremento será igual a la tasa de inflación causada, más una tasa de crecimiento real de 3%. Parágrafo transitorio 2°. Si la tasa de crecimiento real de la economía (Producto Interno Bruto (PIB) certificada por el DANE para el año respectivo es superior al 4%, el incremento del SGP será igual a la tasa de inflación causada, más la tasa de crecimiento real señalada en el parágrafo transitorio 1° del presente artículo, más los puntos porcentuales de diferencia resultantes de comparar la tasa de crecimiento real de la economía certificada por el DANE y el 4%. Estos recursos adicionales se destinarán a la atención integral de la primera infancia. El aumento del SGP por mayor crecimiento económico, de que trata el presente parágrafo, no generará base para la liquidación del SGP en años posteriores. Parágrafo transitorio 3°. El Sistema General de Participaciones (SGP) tendrá un crecimiento adicional a lo establecido en los parágrafos transitorios anteriores para el sector educación. La evolución de dicho crecimiento adicional será así: en los años 2008 y 2009 de uno punto tres por ciento (1.3%), en el año 2010 de uno punto seis por ciento (1.6%), y durante los años 2011 a 2016 de uno punto ocho por ciento (1.8%). En cada uno de estos años, este aumento adicional del Sistema no generará base para la liquidación del monto del SGP de la siguiente vigencia. Estos recursos se destinarán para cobertura y calidad. Parágrafo transitorio 4°. El Gobierno nacional definirá unos criterios y transiciones en la aplicación de los resultados del último censo realizado, con el propósito de evitar los efectos negativos derivados de las variaciones de los datos censales en la distribución del Sistema General de Participaciones. El Sistema orientará los recursos necesarios para que de ninguna manera, se disminuyan, por razón de la población, los recursos que reciben las entidades territoriales actualmente.',
  },
  {
    id: 358,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 4,
    chapter: 'DE LA DISTRIBUCIÓN DE RECURSOS Y DE LAS COMPETENCIAS',
    articleNumber: 358,
    content:
      'Para los efectos contemplados en los dos artículos anteriores, entiéndese por ingresos corrientes los constituidos por los ingresos tributarios y no tributarios con excepción de los recursos de capital.',
  },
  {
    id: 359,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 4,
    chapter: 'DE LA DISTRIBUCIÓN DE RECURSOS Y DE LAS COMPETENCIAS',
    articleNumber: 359,
    content:
      'No habrá rentas nacionales de destinación específica. Se exceptúan: 1. Las participaciones previstas en la Constitución en favor de los departamentos, distritos y municipios. 2. Las destinadas para inversión social. 3. Las que, con base en leyes anteriores, la nación asigna a entidades de previsión social y a las antiguas intendencias y comisarías.',
  },
  {
    id: 360,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 4,
    chapter: 'DE LA DISTRIBUCIÓN DE RECURSOS Y DE LAS COMPETENCIAS',
    articleNumber: 360,
    content:
      'Acto Legislativo 05 de 2011, artículo 1°. El artículo 360 de la Constitución Política quedará así: La explotación de un recurso natural no renovable causará, a favor del Estado, una contraprestación económica a título de regalía, sin perjuicio de cualquier otro derecho o compensación que se pacte. La ley determinará las condiciones para la explotación de los recursos naturales no renovables. Mediante otra ley, a iniciativa del Gobierno, la ley determinará la distribución, objetivos, fines, administración, ejecución, control, el uso eficiente y la destinación de los ingresos provenientes de la explotación de los recursos naturales no renovables precisando las condiciones de participación de sus beneficiarios. Este conjunto de ingresos, asignaciones, órganos, procedimientos y regulaciones constituye el Sistema General de Regalías.',
  },
  {
    id: 361,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 4,
    chapter: 'DE LA DISTRIBUCIÓN DE RECURSOS Y DE LAS COMPETENCIAS',
    articleNumber: 361,
    content:
      'Acto Legislativo 05 de 2011, artículo 2°. El artículo 361 de la Constitución Política quedará así: Los ingresos del Sistema General de Regalías se destinarán al financiamiento de proyectos para el desarrollo social, económico y ambiental de las entidades territoriales; al ahorro para su pasivo pensional; para inversiones físicas en educación, para inversiones en ciencia, tecnología e innovación; para la generación de ahorro público; para la fiscalización de la exploración y explotación de los yacimientos y conocimiento y cartografía geológica del subsuelo; y para aumentar la competitividad general de la economía, buscando mejorar las condiciones sociales de la población. Los departamentos, municipios y distritos en cuyo territorio se adelanten explotaciones de recursos naturales no renovables, así como los municipios y distritos con puertos marítimos y fluviales por donde se transporten dichos recursos o productos derivados de los mismos, tendrán derecho a participar en las regalías y compensaciones, así como a ejecutar directamente estos recursos. Para efectos de cumplir con los objetivos y fines del Sistema General de Regalías, créanse los Fondos de Ciencia, Tecnología e Innovación; de Desarrollo Regional; de Compensación Regional; y de Ahorro y Estabilización. Los ingresos del Sistema General de Regalías se distribuirán así: un porcentaje equivalente al 10% para el Fondo de Ciencia, Tecnología e Innovación; un 10% para ahorro pensional territorial, y hasta un 30% para el Fondo de Ahorro y Estabilización. Los recursos restantes se distribuirán en un porcentaje equivalente al 20% para las asignaciones directas de que trata el inciso 2° del presente artículo, y un 80% para los Fondos de Compensación Regional, y de Desarrollo Regional. Del total de los recursos destinados a estos dos últimos Fondos, se destinará un porcentaje equivalente al 60% para el Fondo de Compensación Regional y un 40% para el Fondo de Desarrollo Regional. De los ingresos del Sistema General de Regalías, se destinará un porcentaje del 2% para fiscalización de la exploración y explotación de los yacimientos, y el conocimiento y cartografía geológica del subsuelo. Este porcentaje se descontará en forma proporcional del total de los ingresos del Sistema General de Regalías distribuidos en el inciso anterior. Las funciones aquí establecidas serán realizadas por el Ministerio de Minas y Energía o por la entidad a quien este delegue. La suma de los recursos correspondientes a las asignaciones directas de que trata el inciso 2° del presente artículo, y de los recursos del Fondo de Desarrollo Regional y del Fondo de Compensación Regional, crecerán anualmente a una tasa equivalente a la mitad de la tasa de crecimiento total de los ingresos del Sistema General de Regalías. La ley que regulará el sistema definirá un mecanismo para mitigar la disminución de los mencionados recursos, que se presente como consecuencia de una reducción drástica en los ingresos del Sistema General de Regalías. Sistema General de Regalías y los recursos destinados al ahorro pensional territorial, al Fondo de Ciencia, Tecnología e Innovación, al Fondo de Desarrollo Regional, al Fondo de Compensación Regional, así como a los que se refiere el inciso 2° del presente artículo se destinará al Fondo de Ahorro y Estabilización. Los Fondos de Ciencia, Tecnología e Innovación y de Desarrollo Regional tendrán como finalidad la financiación de proyectos regionales acordados entre las entidades territoriales y el Gobierno nacional. Los recursos del Fondo de Compensación Regional se destinarán a la financiación de proyectos de impacto regional o local de desarrollo en las entidades territoriales más pobres del país, de acuerdo con criterios de Necesidades Básicas Insatisfechas (NBI), población y desempleo, y con prioridad en las zonas costeras, fronterizas y de periferia. La duración del Fondo de Compensación Regional será de treinta (30) años, contados a partir de la entrada en vigencia de la ley a la que se refiere el inciso 2° del artículo anterior. Transcurrido este período, estos recursos se destinarán al Fondo de Desarrollo Regional. Los recursos del Fondo de Ahorro y Estabilización, así como sus rendimientos, serán administrados por el Banco de la República en los términos que establezca el Gobierno nacional. En los períodos de desahorro, la distribución de estos recursos entre los demás componentes del Sistema se regirá por los criterios que defina la ley a la que se refiere el inciso 2° del artículo anterior. En caso de que los recursos destinados anualmente al Fondo de Ahorro y Estabilización excedan del treinta por ciento (30%) de los ingresos anuales del Sistema General de Regalías, tal excedente se distribuirá entre los demás componentes del Sistema, conforme a los términos y condiciones que defina la ley a la que se refiere el inciso 2° del artículo anterior. Parágrafo 1°. Los recursos del Sistema General de Regalías no harán parte del Presupuesto General de la Nación, ni del Sistema General de Participaciones. El Sistema General de Regalías tendrá su propio sistema presupuestal que se regirá por las normas contenidas en la ley a que se refiere el inciso 2° del artículo anterior. En todo caso, el Congreso de la República expedirá bianualmente el presupuesto del Sistema General de Regalías. Parágrafo 2°. La ejecución de los recursos correspondientes a las asignaciones directas de que trata el inciso 2° del presente artículo, así como de los recursos de los Fondos de Ciencia, Tecnología e Innovación; de Desarrollo Regional, y de Compensación Regional, se hará en concordancia con el Plan Nacional de Desarrollo y los planes de desarrollo de las entidades territoriales. Los proyectos prioritarios que se financiarán con estos recursos, serán definidos por órganos colegiados de administración y decisión, de conformidad con lo establecido en la ley que regule el Sistema General de Regalías. Para el caso de los departamentos a los que se refiere el inciso 2° del presente artículo, los órganos colegiados de administración y decisión estarán integrados por dos (2) Ministros o sus delegados, el gobernador respectivo o su delegado, y un número representativo de alcaldes. La ley que regule el Sistema General de Regalías podrá crear comités de carácter consultivo para los órganos colegiados de administración y decisión, con participación de la sociedad civil. En cuanto a los municipios y/o distritos a los que se refiere el inciso 2° del presente artículo, los órganos colegiados de administración y decisión estarán conformados por un delegado del Gobierno nacional, el gobernador o su delegado y el alcalde. Los programas y/o proyectos en ciencia, tecnología e innovación de los departamentos, municipios y distritos que se financiarán con los recursos del Fondo de Ciencia, Tecnología e Innovación, se definirán por un órgano colegiado de administración y decisión, en el cual tendrán asiento el Gobierno nacional, representado por tres (3) Ministros o sus delegados, un (1) representante del organism nacional de Planeación y un (1) representante del organismo nacional encargado del manejo de la política pública de ciencia y tecnología e innovación, quien además ejercerá la Secretaría Técnica, un (1) Gobernador por cada una de las instancias de planeación regional a que se refiere el inciso siguiente del presente artículo; cuatro (4) representantes de las universidades públicas y dos (2) representantes de universidades privadas. Asimismo, los recursos de este Fondo de Ciencia, Tecnología e Innovación, se distribuirán en la misma proporción en que se distribuyan a los departamentos, los recursos de los Fondos de Compensación Regional y de Desarrollo Regional. En ningún caso los recursos de este fondo podrán financiar gasto corriente. Los proyectos de impacto regional de los departamentos, municipios y distritos que se financiarán con los recursos de los Fondos de Desarrollo y Compensación Regional se definirán a través de ejercicios de planeación regional por órganos colegiados de administración y decisión donde tengan asiento cuatro (4) Ministros o sus delegados y un (1) representante del organismo nacional de Planeación, los gobernadores respectivos o sus delegados y un número representativo de alcaldes. La ley que regule el Sistema General de Regalías, podrá crear comités de carácter consultivo para los órganos colegiados de administración y decisión con participación de la sociedad civil. En todo caso, la representación de las entidades territoriales en los órganos colegiados será mayoritaria, en relación con la del Gobierno nacional. Parágrafo 3°. Créase el Sistema de Monitoreo, Seguimiento, Control y Evaluación de las Regalías, cuyo objeto será velar por el uso eficiente y eficaz de los recursos del Sistema General de Regalías, fortaleciendo la transparencia, la participación ciudadana y el Buen Gobierno. La ley a la que se refiere el inciso 2° del artículo anterior, definirá su funcionamiento y el procedimiento para la imposición de medidas preventivas, correctivas y sancionatorias por el inadecuado uso de los recursos del Sistema General de Regalías. Dentro de estas medidas podrán aplicarse a los departamentos, municipios y/o distritos y demás ejecutores la suspensión de giros, cancelación de proyectos y/o el reintegro de recursos. La ley a la que se refiere el inciso 2° del artículo anterior definirá, igualmente, el porcentaje anual de los recursos de Sistema General de Regalías destinado a su funcionamiento y al del Sistema de Monitoreo, Seguimiento, Control y Evaluación de las Regalías. Este porcentaje se descontará en forma proporcional del total de los ingresos del Sistema General de Regalías distribuidos en el inciso 4° del presente artículo. Parágrafo 1° transitorio. Suprímase el Fondo Nacional de Regalías a partir de la fecha que determine la ley a la que se refiere el inciso 2° del artículo anterior. El Gobierno nacional designará al liquidador y definirá el procedimiento y el plazo para la liquidación. Los recursos no comprometidos que posea el Fondo Nacional de Regalías a la entrada en vigencia del presente Acto Legislativo, se destinarán prioritariamente a la reconstrucción de la infraestructura vial del país y a la recuperación ambiental de las zonas afectadas por la emergencia invernal de 2010-2011. Parágrafo 2° transitorio. Respecto de los recursos que se destinarán a las asignaciones directas de que trata el inciso 2° del presente artículo y a los Fondos de Compensación Regional, y de Desarrollo Regional, su distribución durante los tres primeros años será así: durante el primer año corresponderá a un porcentaje equivalente al 50% para las asignaciones directas de que trata el inciso 2° del presente artículo y un 50% para los fondos enunciados en este parágrafo; de la misma forma, durante el segundo año se destinará un porcentaje equivalente al 35% y al 65% respectivamente; y durante el tercer año se destinará un porcentaje equivalente al 25% y el 75%, respectivamente. En el evento en que durante el período comprendido entre los años 2012 y 2014, las asignaciones directas de que trata el inciso 2° del presente artículo, sean inferiores al 50% del promedio anual, en pesos constantes de 2010, de las asignaciones directas causadas menos descuentos de ley entre los años 2007 y 2010; y durante el período comprendido entre los años 2015 y 2020, sean inferiores al 40% del promedio anual, en pesos constantes de 2010, de las asignaciones directas causadas menos descuentos de ley entre los años 2007 y 2010; el departamento, municipio o distrito, podrá utilizar los recursos de la asignación del departamento respectivo en el Fondo de Desarrollo Regional, hasta alcanzar dicho porcentaje o hasta agotar los recursos del departamento en el mencionado Fondo, lo que ocurra primero. Parágrafo 3° transitorio. En el primer año de operación del Sistema General de Regalías, se destinará un veinticinco por ciento (25%) de sus recursos al Fondo de Ahorro y Estabilización. Durante el período 2012-2014, una quinta parte de los recursos anuales del Fondo de Ahorro y Estabilización se destinará a las asignaciones directas de que trata el inciso 2° del presente artículo. Parágrafo 4° transitorio. El Gobierno nacional contará con un término de tres (3) meses contados a partir de la fecha de promulgación del presente acto legislativo, para radicar ante el Congreso de la República el proyecto de ley a la que se refiere el inciso 2° del artículo anterior, que ajuste el régimen de regalías al nuevo marco constitucional. Una vez radicado el proyecto de ley a que se refiere el inciso anterior, el Congreso de la República contará con un término que no podrá exceder de nueve (9) meses para su aprobación. Si vencido este término no se ha expedido la ley por parte del Congreso, se faculta por un (1) mes al Presidente de la República para expedir decretos con fuerza de ley para regular la materia. Parágrafo 5° transitorio. El Sistema General de regalías regirá a partir de 1° de enero de 2012. Si para esta fecha no ha entrado en vigencia la ley de que trata el inciso 2° del artículo anterior, el Gobierno nacional garantizará la operación del Sistema mediante decretos transitorios con fuerza de ley, que expedirá a más tardar el 31 de diciembre de 2011. Parágrafo 6° transitorio. Para asegurar la ejecución de los recursos en la vigencia 2012, el Gobierno nacional expedirá el presupuesto del Sistema General de Regalías para la citada vigencia fiscal, mediante un decreto con fuerza de ley.',
  },
  {
    id: 362,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 4,
    chapter: 'DE LA DISTRIBUCIÓN DE RECURSOS Y DE LAS COMPETENCIAS',
    articleNumber: 362,
    content:
      'Los bienes y rentas tributarias o no tributarias o provenientes de la explotación de monopolios de las entidades territoriales, son de su propiedad exclusiva y gozan de las mismas garantías que la propiedad y renta de los particulares. Los impuestos departamentales y municipales gozan de protección constitucional y en consecuencia la ley no podrá trasladarlos a la nación, salvo temporalmente en caso de guerra exterior.',
  },
  {
    id: 363,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 4,
    chapter: 'DE LA DISTRIBUCIÓN DE RECURSOS Y DE LAS COMPETENCIAS',
    articleNumber: 363,
    content:
      'El sistema tributario se funda en los principios de equidad, eficiencia y progresividad. Las leyes tributarias no se aplicarán con retroactividad.',
  },
  {
    id: 364,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 4,
    chapter: 'DE LA DISTRIBUCIÓN DE RECURSOS Y DE LAS COMPETENCIAS',
    articleNumber: 364,
    content:
      'El endeudamiento interno y externo de la nación y de las entidades territoriales no podrá exceder su capacidad de pago. La ley regulará la materia.',
  },
  {
    id: 365,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 5,
    chapter: 'DE LA FINALIDAD SOCIAL DEL ESTADO Y DE LOS SERVICIOS PÚBLICOS',
    articleNumber: 365,
    content:
      'Los servicios públicos son inherentes a la finalidad social del Estado. Es deber del Estado asegurar su prestación eficiente a todos los habitantes del territorio nacional. Los servicios públicos estarán sometidos al régimen jurídico que fije la ley, podrán ser prestados por el Estado, directa o indirectamente, por comunidades organizadas, o por particulares. En todo caso, el Estado mantendrá la regulación, el control y la vigilancia de dichos servicios. Si por razones de soberanía o de interés social, el Estado, mediante ley aprobada por la mayoría de los miembros de una y otra Cámara, por iniciativa del Gobierno decide reservarse determinadas actividades estratégicas o servicios públicos, deberá indemnizar previa y plenamente a las personas que en virtud de dicha ley, queden privadas del ejercicio de una actividad lícita.',
  },
  {
    id: 366,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 5,
    chapter: 'DE LA FINALIDAD SOCIAL DEL ESTADO Y DE LOS SERVICIOS PÚBLICOS',
    articleNumber: 366,
    content:
      'El bienestar general y el mejoramiento de la calidad de vida de la población son finalidades sociales del Estado. Será objetivo fundamental de su actividad la solución de las necesidades insatisfechas de salud, de educación, de saneamiento ambiental y de agua potable. Para tales efectos, en los planes y presupuestos de la nación y de las entidades territoriales, el gasto público social tendrá prioridad sobre cualquier otra asignación.',
  },
  {
    id: 367,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 5,
    chapter: 'DE LA FINALIDAD SOCIAL DEL ESTADO Y DE LOS SERVICIOS PÚBLICOS',
    articleNumber: 367,
    content:
      'La ley fijará las competencias y responsabilidades relativas a la prestación de los servicios públicos domiciliarios, su cobertura, calidad y financiación, y el régimen tarifario que tendrá en cuenta además de los criterios de costos, los de solidaridad y redistribución de ingresos. Los servicios públicos domiciliarios se prestarán directamente por cada municipio cuando las características técnicas y económicas del servicio y las conveniencias generales lo permitan y aconsejen, y los departamentos cumplirán funciones de apoyo y coordinación. La ley determinará las entidades competentes para fijar las tarifas.',
  },
  {
    id: 368,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 5,
    chapter: 'DE LA FINALIDAD SOCIAL DEL ESTADO Y DE LOS SERVICIOS PÚBLICOS',
    articleNumber: 368,
    content:
      'La nación, los departamentos, los distritos, los municipios y las entidades descentralizadas podrán conceder subsidios, en sus respectivos presupuestos, para que las personas de menores ingresos puedan pagar las tarifas de los servicios públicos domiciliarios que cubran sus necesidades básicas.',
  },
  {
    id: 369,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 5,
    chapter: 'DE LA FINALIDAD SOCIAL DEL ESTADO Y DE LOS SERVICIOS PÚBLICOS',
    articleNumber: 369,
    content:
      'La ley determinará los deberes y derechos de los usuarios, el régimen de su protección y sus formas de participación en la gestión y fiscalización de las empresas estatales que presten el servicio. Igualmente definirá la participación de los municipios o de sus representantes, en las entidades y empresas que les presten servicios públicos domiciliarios.',
  },
  {
    id: 370,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 5,
    chapter: 'DE LA FINALIDAD SOCIAL DEL ESTADO Y DE LOS SERVICIOS PÚBLICOS',
    articleNumber: 370,
    content:
      'Corresponde al Presidente de la República señalar, con sujeción a la ley, las políticas generales de administración y control de eficiencia de los servicios públicos domiciliarios y ejercer por medio de la Superintendencia de Servicios Públicos Domiciliarios, el control, la inspección y vigilancia de las entidades que los presten.',
  },
  {
    id: 371,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 6,
    chapter: 'DE LA BANCA CENTRAL',
    articleNumber: 371,
    content:
      'El Banco de la República ejercerá las funciones de banca central. Estará organizado como persona jurídica de derecho público, con autonomía administrativa, patrimonial y técnica, sujeto a un régimen legal propio. Serán funciones básicas del Banco de la República: regular la moneda, los cambios internacionales y el crédito; emitir la moneda legal; administrar las reservas internacionales; ser prestamista de última instancia y banquero de los establecimientos de crédito; y servir como agente fiscal del gobierno. Todas ellas se ejercerán en coordinación con la política económica general. El Banco rendirá al Congreso informe sobre la ejecución de las políticas a su cargo y sobre los demás asuntos que se le soliciten.',
  },
  {
    id: 372,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 6,
    chapter: 'DE LA BANCA CENTRAL',
    articleNumber: 372,
    content:
      'La Junta Directiva del Banco de la República será la autoridad monetaria, cambiaria y crediticia, conforme a las funciones que le asigne la ley. Tendrá a su cargo la dirección y ejecución de las funciones del Banco y estará conformada por siete miembros, entre ellos el Ministro de Hacienda, quien la presidirá. El Gerente del Banco será elegido por la junta directiva y será miembro de ella. Los cinco miembros restantes, de dedicación exclusiva, serán nombrados por el Presidente de la República para períodos prorrogables de cuatro años, reemplazados dos de ellos, cada cuatro años. Los miembros de la junta directiva representarán exclusivamente el interés de la nación. El Congreso dictará la ley a la cual deberá ceñirse el Banco de la República para el ejercicio de sus funciones y las normas con sujeción a las cuales el Gobierno expedirá los estatutos del Banco en los que se determinen, entre otros aspectos, la forma de su organización, su régimen legal, el funcionamiento de su junta directiva y del consejo de administración, el período del gerente, las reglas para la constitución de sus reservas, entre ellas, las de estabilización cambiaria y monetaria, y el destino de los excedentes de sus utilidades. El Presidente de la República ejercerá la inspección, vigilancia y control del Banco en los términos que señale la ley.',
  },
  {
    id: 373,
    titleNumber: 12,
    title: 'DEL RÉGIMEN ECONÓMICO Y DE LA HACIENDA PÚBLICA',
    chapterNumber: 6,
    chapter: 'DE LA BANCA CENTRAL',
    articleNumber: 373,
    content:
      'El Estado, por intermedio del Banco de la República, velará por el mantenimiento de la capacidad adquisitiva de la moneda. El Banco no podrá establecer cupos de crédito, ni otorgar garantías a favor de particulares, salvo cuando se trate de intermediación de crédito externo para su colocación por medio de los establecimientos de crédito, o de apoyos transitorios de liquidez para los mismos. Las operaciones de financiamiento a favor del Estado requerirán la aprobación unánime de la junta directiva, a menos que se trate de operaciones de mercado abierto. El legislador, en ningún caso, podrá ordenar cupos de crédito a favor del Estado o de los particulares.',
  },
  {
    id: 374,
    titleNumber: 13,
    title: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    chapterNumber: 1,
    chapter: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    articleNumber: 374,
    content:
      'La Constitución Política podrá ser reformada por el Congreso, por una Asamblea Constituyente o por el pueblo mediante referendo.',
  },
  {
    id: 375,
    titleNumber: 13,
    title: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    chapterNumber: 1,
    chapter: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    articleNumber: 375,
    content:
      'Podrán presentar proyectos de acto legislativo el Gobierno, diez miembros del Congreso, el veinte por ciento de los concejales o de los diputados y los ciudadanos en un número equivalente al menos, al cinco por ciento del censo electoral vigente. El trámite del proyecto tendrá lugar en dos períodos ordinarios y consecutivos. Aprobado en el primero de ellos por la mayoría de los asistentes, el proyecto será publicado por el Gobierno. En el segundo período la aprobación requerirá el voto de la mayoría de los miembros de cada Cámara. En este segundo período solo podrán debatirse iniciativas presentadas en el primero.',
  },
  {
    id: 376,
    titleNumber: 13,
    title: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    chapterNumber: 1,
    chapter: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    articleNumber: 376,
    content:
      'Mediante ley aprobada por mayoría de los miembros de una y otra Cámara, el Congreso podrá disponer que el pueblo en votación popular decida si convoca una Asamblea Constituyente con la competencia, el período y la composición que la misma ley determine. Se entenderá que el pueblo convoca la Asamblea, si así lo aprueba, cuando menos, una tercera parte de los integrantes del censo electoral. La Asamblea deberá ser elegida por el voto directo de los ciudadanos, en acto electoral que no podrá coincidir con otro. A partir de la elección quedará en suspenso la facultad ordinaria del Congreso para reformar la Constitución durante el término señalado para que la Asamblea cumpla sus funciones. La Asamblea adoptará su propio reglamento.',
  },
  {
    id: 377,
    titleNumber: 13,
    title: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    chapterNumber: 1,
    chapter: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    articleNumber: 377,
    content:
      'Deberán someterse a referendo las reformas constitucionales aprobadas por el Congreso, cuando se refieran a los derechos reconocidos en el Capítulo 1 del Título II y a sus garantías, a los procedimientos de participación popular, o al Congreso, si así lo solicita, dentro de los seis meses siguientes a la promulgación del Acto Legislativo, un cinco por ciento de los ciudadanos que integren el censo electoral. La reforma se entenderá derogada por el voto negativo de la mayoría de los sufragantes, siempre que en la votación hubiere participado al menos la cuarta parte del censo electoral.',
  },
  {
    id: 378,
    titleNumber: 13,
    title: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    chapterNumber: 1,
    chapter: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    articleNumber: 378,
    content:
      'Por iniciativa del Gobierno o de los ciudadanos en las condiciones del artículo 155, el Congreso, mediante ley que requiere la aprobación de la mayoría de los miembros de ambas Cámaras, podrá someter a referendo un proyecto de reforma constitucional que el mismo Congreso incorpore a la ley. El referendo será presentado de manera que los electores puedan escoger libremente en el temario o articulado qué votan positivamente y qué votan negativamente. La aprobación de reformas a la Constitución por vía de referendo requiere el voto afirmativo de más de la mitad de los sufragantes, y que el número de estos exceda de la cuarta parte del total de ciudadanos que integren el censo electoral.',
  },
  {
    id: 379,
    titleNumber: 13,
    title: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    chapterNumber: 1,
    chapter: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    articleNumber: 379,
    content:
      'Los Actos Legislativos, la convocatoria a referendo, la consulta popular o el acto de convocación de la Asamblea Constituyente, solo podrán ser declarados inconstitucionales cuando se violen los requisitos establecidos en este título. La acción pública contra estos actos solo procederá dentro del año siguiente a su promulgación, con observancia de lo dispuesto en el artículo 241 numeral 2.',
  },
  {
    id: 380,
    titleNumber: 13,
    title: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    chapterNumber: 1,
    chapter: 'DE LA REFORMA DE LA CONSTITUCIÓN',
    articleNumber: 380,
    content:
      'Queda derogada la Constitución hasta ahora vigente con todas sus reformas. Esta Constitución rige a partir del día de su promulgación.',
  },
  {
    id: 8,
    titleNumber: 1,
    title: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    chapterNumber: 1,
    chapter: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    articleNumber: 8,
    content:
      'Es obligación del Estado y de las personas proteger las riquezas culturales y naturales de la nación.',
  },
  {
    id: 1,
    titleNumber: 1,
    title: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    chapterNumber: 1,
    chapter: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    articleNumber: 1,
    content:
      'Colombia es un Estado social de derecho, organizado en forma de República unitaria, descentralizada, con autonomía de sus entidades territoriales, democrática, participativa y pluralista, fundada en el respeto de la dignidad humana, en el trabajo y la solidaridad de las personas que la integran y en la prevalencia del interés general.',
  },
  {
    id: 2,
    titleNumber: 1,
    title: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    chapterNumber: 1,
    chapter: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    articleNumber: 2,
    content:
      'Son fines esenciales del Estado: servir a la comunidad, promover la prosperidad general y garantizar la efectividad de los principios, derechos y deberes consagrados en la Constitución; facilitar la participación de todos en las decisiones que los afectan y en la vida económica, política, administrativa y cultural de la nación; defender la independencia nacional, mantener la integridad territorial y asegurar la convivencia pacífica y la vigencia de un orden justo.Las autoridades de la República están instituidas para proteger a todas las personas residentes en Colombia, en su vida, honra, bienes, creencias, y demás derechos y libertades, y para asegurar el cumplimiento de los deberes sociales del Estado y de los particulares.',
  },
  {
    id: 3,
    titleNumber: 1,
    title: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    chapterNumber: 1,
    chapter: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    articleNumber: 3,
    content:
      'La soberanía reside exclusivamente en el pueblo, del cual emana el poder público. El pueblo la ejerce en forma directa o por medio de sus representantes, en los términos que la Constitución establece.',
  },
  {
    id: 4,
    titleNumber: 1,
    title: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    chapterNumber: 1,
    chapter: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    articleNumber: 4,
    content:
      'La Constitución es norma de normas. En todo caso de incompatibilidad entre la Constitución y la ley u otra norma jurídica, se aplicarán las disposiciones constitucionales. Es deber de los nacionales y de los extranjeros en Colombia acatar la Constitución y las leyes, y respetar y obedecer a las autoridades.',
  },
  {
    id: 5,
    titleNumber: 1,
    title: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    chapterNumber: 1,
    chapter: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    articleNumber: 5,
    content:
      'El Estado reconoce, sin discriminación alguna, la primacía de los derechos inalienables de la persona y ampara a la familia como institución básica de la sociedad.',
  },
  {
    id: 6,
    titleNumber: 1,
    title: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    chapterNumber: 1,
    chapter: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    articleNumber: 6,
    content:
      '. Los particulares solo son responsables ante las autoridades por infringir la Constitución y las leyes. Los servidores públicos lo son por la misma causa y por omisión o extralimitación en el ejercicio de sus funciones.',
  },
  {
    id: 9,
    titleNumber: 1,
    title: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    chapterNumber: 1,
    chapter: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    articleNumber: 9,
    content:
      'Las relaciones exteriores del Estado se fundamentan en la soberanía nacional, en el respeto a la autodeterminación de los pueblos y en el reconocimiento de los principios del derecho internacional aceptados por Colombia. De igual manera, la política exterior de Colombia se orientará hacia la integración latinoamericana y del Caribe.',
  },
  {
    id: 10,
    titleNumber: 1,
    title: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    chapterNumber: 1,
    chapter: 'DE LOS PRINCIPIOS FUNDAMENTALES',
    articleNumber: 10,
    content:
      'El castellano es el idioma oficial de Colombia. Las lenguas y dialectos de los grupos étnicos son también oficiales en sus territorios. La enseñanza que se imparta en las comunidades con tradiciones lingüísticas propias será bilingüe.',
  },
  {
    id: 11,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 11,
    content: 'El derecho a la vida es inviolable. No habrá pena de muerte.',
  },
  {
    id: 12,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 12,
    content:
      'Nadie será sometido a desaparición forzada, a torturas ni a tratos o penas crueles, inhumanos o degradantes. ',
  },
  {
    id: 13,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 13,
    content:
      'Todas las personas nacen libres e iguales ante la ley, recibirán la misma protección y trato de las autoridades y gozarán de los mismos derechos, libertades y oportunidades sin ninguna discriminación por razones de sexo, raza, origen nacional o familiar, lengua, religión, opinión política o filosófica. El Estado promoverá las condiciones para que la igualdad sea real y efectiva y adoptará medidas en favor de grupos discriminados o marginados. El Estado protegerá especialmente a aquellas personas que por su condición económica, física o mental, se encuentren en circunstancia de debilidad manifiesta y sancionará los abusos o maltratos que contra ellas se cometan.',
  },
  {
    id: 14,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 14,
    content:
      'Toda persona tiene derecho al reconocimiento de su personalidad jurídica',
  },
  {
    id: 15,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 15,
    content:
      'Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas. En la recolección, tratamiento y circulación de datos se respetarán la libertad y demás garantías consagradas en la Constitución. La correspondencia y demás formas de comunicación privada son inviolables. Solo pueden ser interceptadas o registradas mediante orden judicial, en los casos y con las formalidades que establezca la ley. Para efectos tributarios o judiciales y para los casos de inspección, vigilancia e intervención del Estado podrá exigirse la presentación de libros de contabilidad y demás documentos privados, en los términos que señale la ley',
  },
  {
    id: 16,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 16,
    content:
      'Todas las personas tienen derecho al libre desarrollo de su personalidad sin más limitaciones que las que imponen los derechos de los demás y el orden jurídico.',
  },
  {
    id: 17,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 17,
    content:
      'Se prohíben la esclavitud, la servidumbre y la trata de seres humanos en todas sus formas.',
  },
  {
    id: 18,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 18,
    content:
      'Se garantiza la libertad de conciencia. Nadie será molestado por razón de sus convicciones o creencias ni compelido a revelarlas ni obligado a actuar contra su conciencia.',
  },
  {
    id: 19,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 19,
    content:
      'Se garantiza la libertad de cultos. Toda persona tiene derecho a profesar libremente su religión y a difundirla en forma individual o colectiva. Todas las confesiones  religiosas e iglesias son igualmente libres ante la ley.',
  },
  {
    id: 20,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 20,
    content:
      'Se garantiza a toda persona la libertad de expresar y difundir su pensamiento y opiniones, la de informar y recibir información veraz e imparcial, y la de fundar medios masivos de comunicación. Estos son libres y tienen responsabilidad social. Se garantiza el derecho a la rectificación en condiciones de equidad. No habrá censura.',
  },
  {
    id: 21,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 21,
    content:
      'Se garantiza el derecho a la honra. La ley señalará la forma de su protección.',
  },
  {
    id: 22,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 22,
    content: 'La paz es un derecho y un deber de obligatorio cumplimiento',
  },
  {
    id: 23,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 23,
    content:
      'Toda persona tiene derecho a presentar peticiones respetuosas a las autoridades por motivos de interés general o particular y a obtener pronta resolución. El legislador podrá reglamentar su ejercicio ante organizaciones privadas para garantizar los derechos fundamentales.',
  },
  {
    id: 24,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 24,
    content:
      'Todo colombiano, con las limitaciones que establezca la ley, tiene derecho a circular libremente por el territorio nacional, a entrar y salir de él, y a permanecer y residenciarse en Colombia.',
  },
  {
    id: 25,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 25,
    content:
      'El trabajo es un derecho y una obligación social y goza, en todas sus modalidades, de la especial protección del Estado. Toda persona tiene derecho a un trabajo en condiciones dignas y justas.',
  },
  {
    id: 26,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 26,
    content:
      'Toda persona es libre de escoger profesión u oficio. La ley podrá exigir títulos de idoneidad. Las autoridades competentes inspeccionarán y vigilarán el ejercicio de las profesiones. Las ocupaciones, artes y oficios que no exijan formación académica son de libre ejercicio, salvo aquellas que impliquen un riesgo social. Las profesiones legalmente reconocidas pueden organizarse en colegios. La estructura interna y el funcionamiento de estos deberán ser democráticos. La ley podrá asignarles funciones públicas y establecer los debidos controles.',
  },
  {
    id: 27,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 27,
    content:
      'El Estado garantiza las libertades de enseñanza, aprendizaje, investigación y cátedra',
  },
  {
    id: 28,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 28,
    content:
      'Toda persona es libre. Nadie puede ser molestado en su persona o familia, ni reducido a prisión o arresto, ni detenido, ni su domicilio registrado, sino en virtud de mandamiento escrito de autoridad judicial competente, con las formalidades legales y por motivo previamente definido en la ley. La persona detenida preventivamente será puesta a disposición del juez competente dentro de las treinta y seis horas siguientes, para que este adopte la decisión correspondiente en el término que establezca la ley. En ningún caso podrá haber detención, prisión ni arresto por deudas, ni penas y medidas de seguridad imprescriptibles.',
  },
  {
    id: 29,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 29,
    content:
      'El debido proceso se aplicará a toda clase de actuaciones judiciales y administrativas. Nadie podrá ser juzgado sino conforme a leyes preexistentes al acto que se le imputa, ante juez o tribunal competente y con observancia de la plenitud de las formas propias de cada juicio. En materia penal, la ley permisiva o favorable, aun cuando sea posterior, se aplicará de preferencia a la restrictiva o desfavorable. Toda persona se presume inocente mientras no se la haya declarado judicialmente culpable. Quien sea sindicado tiene derecho a la defensa y a la asistencia de un abogado escogido por él, o de oficio, durante la investigación y el juzgamiento; a un debido proceso público sin dilaciones injustificadas; a presentar pruebas y a controvertir las que se alleguen en su contra; a impugnar la sentencia condenatoria, y a no ser juzgado dos veces por el mismo hecho. Es nula, de pleno derecho, la prueba obtenida con violación del debido proceso.',
  },
  {
    id: 30,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 30,
    content:
      'Quien estuviere privado de su libertad, y creyere estarlo ilegalmente, tiene derecho a invocar ante cualquier autoridad judicial, en todo tiempo, por sí o por interpuesta persona, el hábeas corpus, el cual debe resolverse en el término de treinta y seis horas.',
  },
  {
    id: 31,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 31,
    content:
      'Toda sentencia judicial podrá ser apelada o consultada, salvo las excepciones que consagre la ley. El superior no podrá agravar la pena impuesta cuando el condenado sea apelante único.',
  },
  {
    id: 32,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 32,
    content:
      'El delincuente sorprendido en flagrancia podrá ser aprehendido y llevado ante el juez por cualquier persona. Si los agentes de la autoridad lo persiguieren y se refugiare en su propio domicilio, podrán penetrar en él, para el acto de la aprehensión; si se acogiere a domicilio ajeno, deberá preceder requerimiento al morador.',
  },
  {
    id: 33,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 33,
    content:
      'Nadie podrá ser obligado a declarar contra sí mismo o contra su cónyuge, compañero permanente o parientes dentro del cuarto grado de consanguinidad, segundo de afinidad o primero civil.',
  },
  {
    id: 34,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 34,
    content:
      'Se prohíben las penas de destierro, prisión perpetua y confiscación. No obstante, por sentencia judicial, se declarará extinguido el dominio sobre los bienes adquiridos mediante enriquecimiento ilícito, en perjuicio del tesoro público o con grave deterioro de la moral social.',
  },
  {
    id: 35,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 35,
    content:
      'Acto Legislativo No. 01 de 1997, artículo 1°. El artículo 35 de la Constitución Política quedará así: La extradición se podrá solicitar, conceder u ofrecer de acuerdo con los tratados públicos y, en su defecto, con la ley. Además, la extradición de los colombianos por nacimiento se concederá por delitos cometidos en el exterior, considerados como tales en la legislación penal colombiana. La extradición no procederá por delitos políticos. No procederá la extradición cuando se trate de hechos cometidos con anterioridad a la promulgación de la presente norma.',
  },
  {
    id: 36,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 36,
    content:
      'Se reconoce el derecho de asilo en los términos previstos en la ley.',
  },
  {
    id: 37,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 37,
    content:
      'Toda parte del pueblo puede reunirse y manifestarse pública y pacíficamente. Solo la ley podrá establecer de manera expresa los casos en los cuales se podrá limitar el ejercicio de este derecho.',
  },
  {
    id: 38,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 38,
    content:
      'Se garantiza el derecho de libre asociación para el desarrollo de las distintas actividades que las personas realizan en sociedad.',
  },
  {
    id: 39,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 39,
    content:
      'Los trabajadores y empleadores tienen derecho a constituir sindicatos o asociaciones, sin intervención del Estado. Su reconocimiento jurídico se producirá con la simple inscripción del acta de constitución. La estructura interna y el funcionamiento de los sindicatos y organizaciones sociales y gremiales se sujetarán al orden legal y a los principios democráticos. La cancelación o la suspensión de la personería jurídica solo proceden por vía judicial. Se reconoce a los representantes sindicales el fuero y las demás garantías necesarias para el cumplimiento de su gestión. No gozan del derecho de asociación sindical los miembros de la Fuerza Pública.',
  },
  {
    id: 40,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 40,
    content:
      'Todo ciudadano tiene derecho a participar en la conformación, ejercicio y control del poder político. Para hacer efectivo este derecho puede: 1. Elegir y ser elegido. 2. Tomar parte en elecciones, plebiscitos, referendos, consultas populares y otras formas de participación democrática. 3. Constituir partidos, movimientos y agrupaciones políticas sin limitación alguna; formar parte de ellos libremente y difundir sus ideas y programas. 4. Revocar el mandato de los elegidos en los casos y en la forma que establecen la Constitución y la ley.5. Tener iniciativa en las corporaciones públicas. 6. Interponer acciones públicas en defensa de la Constitución y de la ley. 7. Acceder al desempeño de funciones y cargos públicos, salvo los colombianos, por nacimiento o por adopción, que tengan doble nacionalidad. La ley reglamentará esta excepción y determinará los casos a los cuales ha de aplicarse. Las autoridades garantizarán la adecuada y efectiva participación de la mujer en los niveles decisorios de la Administración Pública. ',
  },
  {
    id: 41,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 1,
    chapter: 'DE LOS DERECHOS FUNDAMENTALES',
    articleNumber: 41,
    content:
      'En todas las instituciones de educación, oficiales o privadas, serán obligatorios el estudio de la Constitución y la Instrucción Cívica. Asimismo se fomentarán prácticas democráticas para el aprendizaje de los principios y valores de la participación ciudadana. El Estado divulgará la Constitución.',
  },
  {
    id: 66,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 66,
    content:
      'Las disposiciones que se dicten en materia crediticia podrán reglamentar las condiciones especiales del crédito agropecuario, teniendo en cuenta los ciclos de las cosechas y de los precios, como también los riesgos inherentes a la actividad y las calamidades ambientales.',
  },
  {
    id: 79,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 3,
    chapter: 'DE LOS DERECHOS COLECTIVOS Y DEL AMBIENTE',
    articleNumber: 79,
    content:
      'Todas las personas tienen derecho a gozar de un ambiente sano. La ley garantizará la participación de la comunidad en las decisiones que puedan afectarlo. Es deber del Estado proteger la diversidad e integridad del ambiente, conservar las áreas de especial importancia ecológica y fomentar la educación para el logro de estos fines.',
  },
  {
    id: 42,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 42,
    content:
      'La familia es el núcleo fundamental de la sociedad. Se constituye por vínculos naturales o jurídicos, por la decisión libre de un hombre y una mujer de contraer matrimonio o por la voluntad responsable de conformarla. El Estado y la sociedad garantizan la protección integral de la familia. La ley podrá determinar el patrimonio familiar inalienable e inembargable. La honra, la dignidad y la intimidad de la familia son inviolables. Las relaciones familiares se basan en la igualdad de derechos y deberes de la pareja y en el respeto recíproco entre todos sus integrantes. Cualquier forma de violencia en la familia se considera destructiva de su armonía y unidad, y será sancionada conforme a la ley. Los hijos habidos en el matrimonio o fuera de él, adoptados o procreados naturalmente o con asistencia científica, tienen iguales derechos y deberes. La ley reglamentará la progenitura responsable. La pareja tiene derecho a decidir libre y responsablemente el número de sus hijos, y deberá sostenerlos y educarlos mientras sean menores o impedidos. Las formas del matrimonio, la edad y capacidad para contraerlo, los deberes y derechos de los cónyuges, su separación y la disolución del vínculo, se rigen por la ley civil. Los matrimonios religiosos tendrán efectos civiles en los términos que establezca la ley. Los efectos civiles de todo matrimonio cesarán por divorcio con arreglo a la ley civil. También tendrán efectos civiles las sentencias de nulidad de los matrimonios religiosos dictadas por las autoridades de la respectiva religión, en los términos que establezca la ley. La ley determinará lo relativo al estado civil de las pers',
  },
  {
    id: 43,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 43,
    content:
      'La mujer y el hombre tienen iguales derechos y oportunidades. La mujer no podrá ser sometida a ninguna clase de discriminación. Durante el embarazo y después del parto gozará de especial asistencia y protección del Estado, y recibirá de este subsidio alimentario si entonces estuviere desempleada o desamparada. El Estado apoyará de manera especial a la mujer cabeza de familia.',
  },
  {
    id: 44,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 44,
    content:
      'Son derechos fundamentales de los niños: la vida, la integridad física, la salud y la seguridad social, la alimentación equilibrada, su nombre y nacionalidad, tener una familia y no ser separados de ella, el cuidado y amor, la educación y la cultura, la recreación y la libre expresión de su opinión. Serán protegidos contra toda forma de abandono, violencia física o moral, secuestro, venta, abuso sexual, explotación laboral o económica y trabajos riesgosos. Gozarán también de los demás derechos consagrados en la Constitución, en las leyes y en los tratados internacionales ratificados por Colombia. La familia, la sociedad y el Estado tienen la obligación de asistir y proteger al niño para garantizar su desarrollo armónico e integral y el ejercicio pleno de sus derechos. Cualquier persona puede exigir de la autoridad competente su cumplimiento y la sanción de los infractores. Los derechos de los niños prevalecen sobre los derechos de los demás. ',
  },
  {
    id: 45,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 45,
    content:
      'El adolescente tiene derecho a la protección y a la formación integral. El Estado y la sociedad garantizan la participación activa de los jóvenes en los organismos públicos y privados que tengan a cargo la protección, educación y progreso de la juventud.',
  },
  {
    id: 46,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 46,
    content:
      'El Estado, la sociedad y la familia concurrirán para la protección y la asistencia de las personas de la tercera edad y promoverán su integración a la vida activa y comunitaria. El Estado les garantizará los servicios de la seguridad social integral y el subsidio alimentario en caso de indigencia.',
  },
  {
    id: 47,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 47,
    content:
      'El Estado adelantará una política de previsión, rehabilitación e integración social para los disminuidos físicos, sensoriales y psíquicos, a quienes se prestará la atención especializada que requieran.',
  },
  {
    id: 48,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 48,
    content:
      'La Seguridad Social es un servicio público de carácter obligatorio que se prestará bajo la dirección, coordinación y control del Estado, en sujeción a los principios de eficiencia, universalidad y solidaridad, en los términos que establezca la ley. Se garantiza a todos los habitantes el derecho irrenunciable a la Seguridad Social. El Estado, con la participación de los particulares, ampliará progresivamente la cobertura de la Seguridad Social que comprenderá la prestación de los servicios en la forma que determine la ley. La Seguridad Social podrá ser prestada por entidades públicas o privadas, de conformidad con la ley. No se podrán destinar ni utilizar los recursos de las instituciones de la Seguridad Social para fines diferentes a ella. La ley definirá los medios para que los recursos destinados a pensiones mantengan su poder adquisitivo constante. Acto Legislativo 01 de 2005, artículo 1°. Se adicionan los siguientes incisos y parágrafos al artículo 48 de la Constitución Política: El Estado garantizará los derechos, la sostenibilidad financiera del Sistema Pensional, respetará los derechos adquiridos con arreglo a la ley y asumirá el pago de la deuda pensional que de acuerdo con la ley esté a su cargo. Las leyes en materia pensional que se expidan con posterioridad a la entrada en vigencia de este Acto Legislativo, deberán asegurar la sostenibilidad financiera de lo establecido en ellas. Sin perjuicio de los descuentos, deducciones y embargos a pensiones ordenados de acuerdo con la ley, por ningún motivo podrá dejarse de pagar, congelarse o reducirse el valor de la mesada de las pensiones reconocidas conforme a derecho. Para adquirir el derecho a la pensión será necesario cumplir con la edad, el tiempo de servicio, las semanas de cotización o el capital necesario, así como las demás condiciones que señala la ley, sin perjuicio de lo dispuesto para las pensiones de invalidez y sobrevivencia. Los requisitos y beneficios para adquirir el derecho a una pensión de invalidez o de sobrevivencia serán los establecidos por las leyes del Sistema General de Pensiones. En materia pensional se respetarán todos los derechos adquiridos. Los requisitos y beneficios pensionales para todas las personas, incluidos los de pensión de vejez por actividades de alto riesgo, serán los establecidos en las leyes del Sistema General de Pensiones. No podrá dictarse disposición o invocarse acuerdo alguno para apartarse de lo allí establecido. Para la liquidación de las pensiones solo se tendrán en cuenta los factores sobre los cuales cada persona hubiere efectuado las cotizaciones. Ninguna pensión podrá ser inferior al salario mínimo legal mensual vigente. Sin embargo, la ley podrá determinar los casos en que se puedan conceder beneficios económicos periódicos inferiores al salario mínimo, a personas de escasos recursos que no cumplan con las condiciones requeridas para tener derecho a una pensión. A partir de la vigencia del presente Acto Legislativo, no habrá regímenes especiales ni exceptuados, sin perjuicio del aplicable a la fuerza pública, al Presidente de la República y a lo establecido en los parágrafos del presente artículo. “Las personas cuyo derecho a la pensión se cause a partir de la vigencia del presente Acto Legislativo no podrán recibir más de trece (13) mesadas pensionales al año. Se entiende que la pensión se causa cuando se cumplen todos los requisitos para acceder a ella, aun cuando no se hubiese efectuado el reconocimiento”. La ley establecerá un procedimiento breve para la revisión de las pensiones reconocidas con abuso del derecho o sin el cumplimiento de los requisitos establecidos en la ley o en las convenciones y laudos arbitrales válidamente celebrados. Parágrafo 1°. A partir del 31 de julio de 2010, no podrán causarse pensiones superiores a veinticinco (25) salarios mínimos legales mensuales vigentes, con cargo a recursos de naturaleza pública. Parágrafo 2°. A partir de la vigencia del presente Acto Legislativo no podrán establecerse en pactos, convenciones colectivas de trabajo, laudos o acto jurídico alguno, condiciones pensionales diferentes a las establecidas en las leyes del Sistema General de Pensiones. Parágrafo transitorio 1°. El régimen pensional de los docentes nacionales, nacionalizados y territoriales, vinculados al servicio público educativo oficial es el establecido para el Magisterio en las disposiciones legales vigentes con anterioridad a la entrada en vigencia de la Ley 812 de 2003, y lo preceptuado en el artículo 81 de esta. Los docentes que se hayan vinculado o se vinculen a partir de la vigencia de la citada ley, tendrán los derechos de prima media establecidos en las leyes del Sistema General de Pensiones, en los términos del artículo 81 de la Ley 812 de 2003. Parágrafo transitorio 2°. Sin perjuicio de los derechos adquiridos, el régimen aplicable a los miembros de la Fuerza Pública y al Presidente de la República, y lo establecido en los parágrafos del presente artículo, la vigencia de los regímenes pensionales especiales, los exceptuados, así como cualquier otro distinto al establecido de manera permanente en las leyes del Sistema General de Pensiones expirará el 31 de julio del año 2010. Parágrafo transitorio 3°. Las reglas de carácter pensional que rigen a la fecha de vigencia de este Acto Legislativo contenidas en pactos, convenciones colectivas de trabajo, laudos o acuerdos válidamente celebrados, se mantendrán por el término inicialmente estipulado. En los pactos, convenciones o laudos que se suscriban entre la vigencia de este Acto Legislativo y el 31 de julio de 2010, no podrán estipularse condiciones pensionales más favorables que las que se encuentren actualmente vigentes. En todo caso perderán vigencia el 31 de julio de 2010. Parágrafo transitorio 4°. El régimen de transición establecido en la Ley 100 de 1993 y demás normas que desarrollen dicho régimen, no podrá extenderse más allá del 31 de julio de 2010; excepto para los trabajadores que estando en dicho régimen, además, tengan cotizadas al menos 750 semanas o su equivalente en tiempo de servicios a la entrada en vigencia del presente Acto Legislativo, a los cuales se les mantendrá dicho régimen hasta el año 2014. Los requisitos y beneficios pensionales para las personas cobijadas por este régimen serán los exigidos por el artículo 36 de la Ley 100 de 1993 y demás normas que desarrollen dicho régimen. Parágrafo transitorio 5°. De conformidad con lo dispuesto por el artículo 140 de la Ley 100 de 1993 y el Decreto 2090 de 2003, a partir de la entrada en vigencia de este último decreto, a los miembros del cuerpo de custodia y vigilancia penitenciaria y carcelaria nacional se les aplicará el régimen de alto riesgo contemplado en el mismo. A quienes ingresaron con anterioridad a dicha fecha se aplicará el régimen hasta ese entonces vigente para dichas personas por razón de los riesgos de su labor, este es el dispuesto para el efecto por la Ley 32 de 1986, para lo cual deben haberse cubierto las cotizaciones correspondientes. Parágrafo transitorio 6°. Se exceptúan de lo establecido por el inciso 8° del presente artículo, aquellas personas que perciban una pensión igual o inferior a tres (3) salarios mínimos legales mensuales vigentes, si la misma se causa antes del 31 de julio de 2011, quienes recibirán catorce (14) mesadas pensionales al año.',
  },
  {
    id: 49,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 49,
    content:
      'Acto Legislativo No. 02 de 2009, artículo 1°. El artículo 49 de la Constitución Política quedará así: La atención de la salud y el saneamiento ambiental son servicios públicos a cargo del Estado. Se garantiza a todas las personas el acceso a los servicios de promoción, protección y recuperación de la salud. Corresponde al Estado organizar, dirigir y reglamentar la prestación de servicios de salud a los habitantes y de saneamiento ambiental conforme a los principios de eficiencia, universalidad y solidaridad. También, establecer las políticas para la prestación de servicios de salud por entidades privadas, y ejercer su vigilancia y control. Asimismo, establecer las competencias de la nación, las entidades territoriales y los particulares y determinar los aportes a su cargo en los términos y condiciones señalados en la ley. Los servicios de salud se organizarán en forma descentralizada, por niveles de atención y con participación de la comunidad. La ley señalará los términos en los cuales la atención básica para todos los habitantes será gratuita y obligatoria. Toda persona tiene el deber de procurar el cuidado integral de su salud y de su comunidad. El porte y el consumo de sustancias estupefacientes o sicotrópicas están prohibidos, salvo prescripción médica. Con fines preventivos y rehabilitadores la ley establecerá medidas y tratamientos administrativos de orden pedagógico, profiláctico o terapéutico para las personas que consuman dichas sustancias. El sometimiento a esas medidas y tratamientos requiere el consentimiento informado del adicto. Asimismo, el Estado dedicará especial atención al enfermo dependiente o adicto y a su familia para fortalecerla en valores y principios que contribuyan a prevenir comportamientos que afecten el cuidado integral de la salud de las personas y, por consiguiente, de la comunidad, y desarrollará en forma permanente campañas de prevención contra el consumo de drogas o sustancias estupefacientes y en favor de la recuperación de los adictos.',
  },
  {
    id: 50,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 50,
    content:
      'Todo niño menor de un año que no esté cubierto por algún tipo de protección o de seguridad social, tendrá derecho a recibir atención gratuita en todas las instituciones de salud que reciban aportes del Estado. La ley reglamentará la materia.',
  },
  {
    id: 51,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 51,
    content:
      'Todos los colombianos tienen derecho a vivienda digna. El Estado fijará las condiciones necesarias para hacer efectivo este derecho y promoverá planes de vivienda de interés social, sistemas adecuados de financiación a largo plazo y formas asociativas de ejecución de estos programas de vivienda.',
  },
  {
    id: 52,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 52,
    content:
      'Acto Legislativo 02 de 2000, artículo 1. El artículo 52 de la Constitución Política de Colombia, quedará así: El ejercicio del deporte, sus manifestaciones recreativas, competitivas y autóctonas tienen como función la formación integral de las personas, preservar y desarrollar una mejor salud en el ser humano. El deporte y la recreación, forman parte de la educación y constituyen gasto público social. Se reconoce el derecho de todas las personas a la recreación, a la práctica del deporte y al aprovechamiento del tiempo libre. El Estado fomentará estas actividades e inspeccionará, vigilará y controlará las organizaciones deportivas y recreativas cuya estructura y propiedad deberán ser democráticas.',
  },
  {
    id: 53,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 53,
    content:
      'El Congreso expedirá el estatuto del trabajo. La ley correspondiente tendrá en cuenta por lo menos los siguientes principios mínimos fundamentales: Igualdad de oportunidades para los trabajadores; remuneración mínima vital y móvil, proporcional a la cantidad y calidad de trabajo; estabilidad en el empleo; irrenunciabilidad a los beneficios mínimos establecidos en normas laborales; facultades para transigir y conciliar sobre derechos inciertos y discutibles; situación más favorable al trabajador en caso de duda en la aplicación e interpretación de las fuentes formales de derecho; primacía de la realidad sobre formalidades establecidas por los sujetos de las relaciones laborales; garantía a la seguridad social, la capacitación, el adiestramiento y el descanso necesario; protección especial a la mujer, a la maternidad y al trabajador menor de edad. El Estado garantiza el derecho al pago oportuno y al reajuste periódico de las pensiones legales. Los convenios internacionales del trabajo debidamente ratificados, hacen parte de la legislación interna. La ley, los contratos, los acuerdos y convenios de trabajo, no pueden menoscabar la libertad, la dignidad humana ni los derechos de los trabajadores.',
  },
  {
    id: 54,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 54,
    content:
      'Es obligación del Estado y de los empleadores ofrecer formación y habilitación profesional y técnica a quienes lo requieran. El Estado debe propiciar la ubicación laboral de las personas en edad de trabajar y garantizar a los minusválidos el derecho a un trabajo acorde con sus condiciones de salud.',
  },
  {
    id: 55,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 55,
    content:
      'Se garantiza el derecho de negociación colectiva para regular las relaciones laborales, con las excepciones que señale la ley. Es deber del Estado promover la concertación y los demás medios para la solución pacífica de los conflictos colectivos de trabajo',
  },
  {
    id: 56,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 56,
    content:
      'Se garantiza el derecho de huelga, salvo en los servicios públicos esenciales definidos por el legislador. La ley reglamentará este derecho. Una comisión permanente integrada por el Gobierno, por representantes de los empleadores y de los trabajadores, fomentará las buenas relaciones laborales, contribuirá a la solución de los conflictos colectivos de trabajo y concertará las políticas salariales y laborales. La ley reglamentará su composición y funcionamiento.',
  },
  {
    id: 57,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 57,
    content:
      'La ley podrá establecer los estímulos y los medios para que los trabajadores participen en la gestión de las empresas.',
  },
  {
    id: 58,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 58,
    content:
      'Acto Legislativo 01 de 1999, artículo 1°. El artículo 58 de la Constitución Política, quedará así: Se garantizan la propiedad privada y los demás derechos adquiridos con arreglo a las leyes civiles, los cuales no pueden ser desconocidos ni vulnerados por leyes posteriores. Cuando de la aplicación de una ley expedida por motivos de utilidad pública o interés social, resultare en conflicto los derechos de los particulares con la necesidad por ella reconocida, el interés privado deberá ceder al interés público o social.La propiedad es una función social que implica obligaciones. Como tal, le es inherente una función ecológica. El Estado protegerá y promoverá las formas asociativas y solidarias de propiedad. Por motivos de utilidad pública o interés social definidos por el legislador, podrá haber expropiación mediante sentencia judicial e indemnización previa. Esta se fijará consultando los intereses de la comunidad y del afectado. En los casos que determine el legislador, dicha expropiación podrá adelantarse por vía administrativa, sujeta a posterior acción contenciosa-administrativa, incluso respecto del precio.',
  },
  {
    id: 59,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 59,
    content:
      'En caso de guerra y solo para atender a sus requerimientos, la necesidad de una expropiación podrá ser decretada por el Gobierno nacional sin previa indemnización. En el expresado caso, la propiedad inmueble solo podrá ser temporalmente ocupada, para atender a las necesidades de la guerra, o para destinar a ella sus productos. El Estado será siempre responsable por las expropiaciones que el Gobierno haga por sí o por medio de sus agentes.',
  },
  {
    id: 60,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 60,
    content:
      ' El Estado promoverá, de acuerdo con la ley, el acceso a la propiedad. Cuando el Estado enajene su participación en una empresa, tomará las medidas conducentes a democratizar la titularidad de sus acciones, y ofrecerá a sus trabajadores, a las organizaciones solidarias y de trabajadores, condiciones especiales para acceder a dicha propiedad accionaria. La ley reglamentará la materia',
  },
  {
    id: 61,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 61,
    content:
      'El Estado protegerá la propiedad intelectual por el tiempo y mediante las formalidades que establezca la ley.',
  },
  {
    id: 62,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 62,
    content:
      'El destino de las donaciones intervivos o testamentarias, hechas conforme a la ley para fines de interés social, no podrá ser variado ni modificado por el legislador, a menos que el objeto de la donación desaparezca. En este caso, la ley asignará el patrimonio respectivo a un fin similar. El Gobierno fiscalizará el manejo y la inversión de tales donaciones.',
  },
  {
    id: 63,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 63,
    content:
      'Los bienes de uso público, los parques naturales, las tierras comunales de grupos étnicos, las tierras de resguardo, el patrimonio arqueológico de la nación y los demás bienes que determine la ley, son inalienables, imprescriptibles e inembargables.',
  },
  {
    id: 64,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 64,
    content:
      'Es deber del Estado promover el acceso progresivo a la propiedad de la tierra de los trabajadores agrarios, en forma individual o asociativa, y a los servicios de educación, salud, vivienda, seguridad social, recreación, crédito, comunicaciones, comercialización de los productos, asistencia técnica y empresarial, con el fin de mejorar el ingreso y calidad de vida de los campesinos',
  },
  {
    id: 65,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 65,
    content:
      'La producción de alimentos gozará de la especial protección del Estado. Para tal efecto, se otorgará prioridad al desarrollo integral de las actividades agrícolas, pecuarias, pesqueras, forestales y agroindustriales, así como también a la construcción de obras de infraestructura física y adecuación de tierras. De igual manera, el Estado promoverá la investigación y la transferencia de tecnología para la producción de alimentos y materias primas de origen agropecuario, con el propósito de incrementar la productividad.',
  },
  {
    id: 67,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 67,
    content:
      ' La educación es un derecho de la persona y un servicio público que tiene una función social; con ella se busca el acceso al conocimiento, a la ciencia, a la técnica, y a los demás bienes y valores de la cultura. La educación formará al colombiano en el respeto a los derechos humanos, a la paz y a la democracia; y en la práctica del trabajo y la recreación, para el mejoramiento cultural, científico, tecnológico y para la protección del ambiente. El Estado, la sociedad y la familia son responsables de la educación, que será obligatoria entre los cinco y los quince años de edad y que comprenderá como mínimo, un año de preescolar y nueve de educación básica. La educación será gratuita en las instituciones del Estado, sin perjuicio del cobro de derechos académicos a quienes puedan sufragarlos. Corresponde al Estado regular y ejercer la suprema inspección y vigilancia de la educación con el fin de velar por su calidad, por el cumplimiento de sus fines y por la mejor formación moral, intelectual y física de los educandos; garantizar el adecuado cubrimiento del servicio y asegurar a los menores las condiciones necesarias para su acceso y permanencia en el sistema educativo. La nación y las entidades territoriales participarán en la dirección, financiación y administración de los servicios educativos estatales, en los términos que señalen la Constitución y la ley.',
  },
  {
    id: 68,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 68,
    content:
      'Los particulares podrán fundar establecimientos educativos. La ley establecerá las condiciones para su creación y gestión. La comunidad educativa participará en la dirección de las instituciones de educación. La enseñanza estará a cargo de personas de reconocida idoneidad ética y pedagógica. La ley garantiza la profesionalización y dignificación de la actividad docente. Los padres de familia tendrán derecho de escoger el tipo de educación para sus hijos menores. En los establecimientos del Estado ninguna persona podrá ser obligada a recibir educación religiosa. Los integrantes de los grupos étnicos tendrán derecho a una formación que respete y desarrolle su identidad cultural. La erradicación del analfabetismo y la educación de personas con limitaciones físicas o mentales, o con capacidades excepcionales, son obligaciones especiales del Estado.',
  },
  {
    id: 69,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 69,
    content:
      'Se garantiza la autonomía universitaria. Las universidades podrán darse sus directivas y regirse por sus propios estatutos, de acuerdo con la ley. La ley establecerá un régimen especial para las universidades del Estado. El Estado fortalecerá la investigación científica en las universidades oficiales y privadas y ofrecerá las condiciones especiales para su desarrollo. El Estado facilitará mecanismos financieros que hagan posible el acceso de todas las personas aptas a la educación superior.',
  },
  {
    id: 70,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 70,
    content:
      'El Estado tiene el deber de promover y fomentar el acceso a la cultura de todos los colombianos en igualdad de oportunidades, por medio de la educación permanente y la enseñanza científica, técnica, artística y profesional en todas las etapas del proceso de creación de la identidad nacional. La cultura en sus diversas manifestaciones es fundamento de la nacionalidad. El Estado reconoce la igualdad y dignidad de todas las que conviven en el país. El Estado promoverá la investigación, la ciencia, el desarrollo y la difusión de los valores culturales de la nación.',
  },
  {
    id: 71,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 71,
    content:
      'La búsqueda del conocimiento y la expresión artística son libres. Los planes de desarrollo económico y social incluirán el fomento a las ciencias y, en general, a la cultura. El Estado creará incentivos para personas e instituciones que desarrollen y fomenten la ciencia y la tecnología y las demás manifestaciones culturales y ofrecerá estímulos especiales a personas e instituciones que ejerzan estas actividades.',
  },
  {
    id: 72,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 72,
    content:
      'El patrimonio cultural de la nación está bajo la protección del Estado. El patrimonio arqueológico y otros bienes culturales que conforman la identidad nacional, pertenecen a la nación y son inalienables, inembargables e imprescriptibles. La ley establecerá los mecanismos para readquirirlos cuando se encuentren en manos de particulares y reglamentará los derechos especiales que pudieran tener los grupos étnicos asentados en territorios de riqueza arqueológica.',
  },
  {
    id: 73,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 73,
    content:
      'La actividad periodística gozará de protección para garantizar su libertad e independencia profesional.',
  },
  {
    id: 74,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 74,
    content:
      'Todas las personas tienen derecho a acceder a los documentos públicos salvo los casos que establezca la ley. El secreto profesional es inviolable.',
  },
  {
    id: 75,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 75,
    content:
      'El espectro electromagnético es un bien público inenajenable e imprescriptible sujeto a la gestión y control del Estado. Se garantiza la igualdad de oportunidades en el acceso a su uso en los términos que fije la ley. Para garantizar el pluralismo informativo y la competencia, el Estado intervendrá por mandato de la ley para evitar las prácticas monopolísticas en el uso del espectro electromagnético',
  },
  {
    id: 76,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 76,
    content:
      'Acto Legislativo 02 de 2011, artículo 1. Derógase el artículo 76 de la Constitución Política de Colombia',
  },
  {
    id: 77,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 2,
    chapter: 'DE LOS DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES',
    articleNumber: 77,
    content:
      'Acto Legislativo 02 de 2011, artículo 2. El artículo 77 de la Constitución Política de Colombia, quedará así: El Congreso de la República expedirá la ley que fijará la política en materia de televisión.',
  },
  {
    id: 78,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 3,
    chapter: 'DE LOS DERECHOS COLECTIVOS Y DEL AMBIENTE',
    articleNumber: 78,
    content:
      'La ley regulará el control de calidad de bienes y servicios ofrecidos y prestados a la comunidad, así como la información que debe suministrarse al público en su comercialización. Serán responsables, de acuerdo con la ley, quienes en la producción y en la comercialización de bienes y servicios, atenten contra la salud, la seguridad y el adecuado aprovisionamiento a consumidores y usuarios. El Estado garantizará la participación de las organizaciones de consumidores y usuarios en el estudio de las disposiciones que les conciernen. Para gozar de este derecho las organizaciones deben ser representativas y observar procedimientos democráticos internos.',
  },
  {
    id: 94,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 4,
    chapter: 'DE LA PROTECCIÓN Y APLICACIÓN DE LOS DERECHOS',
    articleNumber: 94,
    content:
      'La enunciación de los derechos y garantías contenidos en la Constitución y en los convenios internacionales vigentes, no debe entenderse como negación de otros que, siendo inherentes a la persona humana, no figuren expresamente en ellos.',
  },
  {
    id: 80,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 3,
    chapter: 'DE LOS DERECHOS COLECTIVOS Y DEL AMBIENTE',
    articleNumber: 80,
    content:
      'El Estado planificará el manejo y aprovechamiento de los recursos naturales, para garantizar su desarrollo sostenible, su conservación, restauración o sustitución. Además, deberá prevenir y controlar los factores de deterioro ambiental, imponer las sanciones legales y exigir la reparación de los daños causados. Asimismo, cooperará con otras naciones en la protección de los ecosistemas situados en las zonas fronterizas.',
  },
  {
    id: 81,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 3,
    chapter: 'DE LOS DERECHOS COLECTIVOS Y DEL AMBIENTE',
    articleNumber: 81,
    content:
      'Queda prohibida la fabricación, importación, posesión y uso de armas químicas, biológicas y nucleares, así como la introducción al territorio nacional de residuos nucleares y desechos tóxicos.El Estado regulará el ingreso al país y la salida de él de los recursos genéticos, y su utilización, de acuerdo con el interés nacional.',
  },
  {
    id: 82,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 3,
    chapter: 'DE LOS DERECHOS COLECTIVOS Y DEL AMBIENTE',
    articleNumber: 82,
    content:
      'Es deber del Estado velar por la protección de la integridad del espacio público y por su destinación al uso común, el cual prevalece sobre el interés particular. Las entidades públicas participarán en la plusvalía que genere su acción urbanística y regularán la utilización del suelo y del espacio aéreo urbano en defensa del interés común.',
  },
  {
    id: 83,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 4,
    chapter: 'DE LA PROTECCIÓN Y APLICACIÓN DE LOS DERECHOS',
    articleNumber: 83,
    content:
      'Las actuaciones de los particulares y de las autoridades públicas deberán ceñirse a los postulados de la buena fe, la cual se presumirá en todas las gestiones que aquellos adelanten ante estas.',
  },
  {
    id: 84,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 4,
    chapter: 'DE LA PROTECCIÓN Y APLICACIÓN DE LOS DERECHOS',
    articleNumber: 84,
    content:
      'Cuando un derecho o una actividad hayan sido reglamentados de manera general, las autoridades públicas no podrán establecer ni exigir permisos, licencias o requisitos adicionales para su ejercicio.',
  },
  {
    id: 85,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 4,
    chapter: 'DE LA PROTECCIÓN Y APLICACIÓN DE LOS DERECHOS',
    articleNumber: 85,
    content:
      'Son de aplicación inmediata los derechos consagrados en los artículos 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 26, 27, 28, 29, 30, 31, 33, 34, 37 y 40.',
  },
  {
    id: 86,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 4,
    chapter: 'DE LA PROTECCIÓN Y APLICACIÓN DE LOS DERECHOS',
    articleNumber: 86,
    content:
      'Toda persona tendrá acción de tutela para reclamar ante los jueces, en todo momento y lugar, mediante un procedimiento preferente y sumario, por sí misma o por quien actúe a su nombre, la protección inmediata de sus derechos constitucionales fundamentales, cuando quiera que estos resulten vulnerados o amenazados por la acción o la omisión de cualquier autoridad pública. La protección consistirá en una orden para que aquel respecto de quien se solicita la tutela, actúe o se abstenga de hacerlo. El fallo, que será de inmediato cumplimiento, podrá impugnarse ante el juez competente y, en todo caso, este lo remitirá a la Corte Constitucional para su eventual revisión. Esta acción solo procederá cuando el afectado no disponga de otro medio de defensa judicial, salvo que aquella se utilice como mecanismo transitorio para evitar un perjuicio irremediable. En ningún caso podrán transcurrir más de diez días entre la solicitud de tutela y su resolución. La ley establecerá los casos en los que la acción de tutela procede contra particulares encargados de la prestación de un servicio público o cuya conducta afecte grave y directamente el interés colectivo, o respecto de quienes el solicitante se halle en estado de subordinación o indefensión.',
  },
  {
    id: 87,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 4,
    chapter: 'DE LA PROTECCIÓN Y APLICACIÓN DE LOS DERECHOS',
    articleNumber: 87,
    content:
      'Toda persona podrá acudir ante la autoridad judicial para hacer efectivo el cumplimiento de una ley o un acto administrativo. En caso de prosperar la acción, la sentencia ordenará a la autoridad renuente el cumplimiento del deber omitido.',
  },
  {
    id: 88,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 4,
    chapter: 'DE LA PROTECCIÓN Y APLICACIÓN DE LOS DERECHOS',
    articleNumber: 88,
    content:
      'La ley regulará las acciones populares para la protección de los derechos e intereses colectivos, relacionados con el patrimonio, el espacio, la seguridad y la salubridad pública, la moral administrativa, el ambiente, la libre competencia económica y otros de similar naturaleza que se definen en ella. También regulará las acciones originadas en los daños ocasionados a un número plural de personas, sin perjuicio de las correspondientes acciones particulares. Asimismo, definirá los casos de responsabilidad civil objetiva por el daño inferido a los derechos e intereses colectivos.',
  },
  {
    id: 89,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 4,
    chapter: 'DE LA PROTECCIÓN Y APLICACIÓN DE LOS DERECHOS',
    articleNumber: 89,
    content:
      'Además de los consagrados en los artículos anteriores, la ley establecerá los demás recursos, las acciones, y los procedimientos necesarios para que puedan propugnar por la integridad del orden jurídico, y por la protección de sus derechos individuales, de grupo o colectivos, frente a la acción u omisión de las autoridades públicas. ',
  },
  {
    id: 90,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 4,
    chapter: 'DE LA PROTECCIÓN Y APLICACIÓN DE LOS DERECHOS',
    articleNumber: 90,
    content:
      'El Estado responderá patrimonialmente por los daños antijurídicos que le sean imputables, causados por la acción o la omisión de las autoridades públicas. En el evento de ser condenado el Estado a la reparación patrimonial de uno de tales daños, que haya sido consecuencia de la conducta dolosa o gravemente culposa de un agente suyo, aquel deberá repetir contra este.',
  },
  {
    id: 91,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 4,
    chapter: 'DE LA PROTECCIÓN Y APLICACIÓN DE LOS DERECHOS',
    articleNumber: 91,
    content:
      'En caso de infracción manifiesta de un precepto constitucional en detrimento de alguna persona, el mandato superior no exime de responsabilidad al agente que lo ejecuta. Los militares en servicio quedan exceptuados de esta disposición. Respecto de ellos, la responsabilidad recaerá únicamente en el superior que da la orden.',
  },
  {
    id: 92,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 4,
    chapter: 'DE LA PROTECCIÓN Y APLICACIÓN DE LOS DERECHOS',
    articleNumber: 92,
    content:
      'Cualquier persona natural o jurídica podrá solicitar de la autoridad competente la aplicación de las sanciones penales o disciplinarias derivadas de la conducta de las autoridades públicas.',
  },
  {
    id: 93,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 4,
    chapter: 'DE LA PROTECCIÓN Y APLICACIÓN DE LOS DERECHOS',
    articleNumber: 93,
    content:
      'Los tratados y convenios internacionales ratificados por el Congreso, que reconocen los derechos humanos y que prohíben su limitación en los estados de excepción, prevalecen en el orden interno. Los derechos y deberes consagrados en esta Carta, se interpretarán de conformidad con los tratados internacionales sobre derechos humanos ratificados por Colombia. Acto legislativo 02 de 2001, artículo 1. Adiciónese el artículo 93 de la Constitución Política con el siguiente texto: El Estado colombiano puede reconocer la jurisdicción de la Corte Penal Internacional en los términos previstos en el Estatuto de Roma adoptado el 17 de julio de 1998 por la Conferencia de Plenipotenciarios de las Naciones Unidas y, consecuentemente, ratificar este tratado de conformidad con el procedimiento establecido en esta Constitución. La admisión de un tratamiento diferente en materias sustanciales por parte del Estatuto de Roma con respecto a las garantías contenidas en la Constitución tendrá efectos exclusivamente dentro del ámbito de la materia regulada en él.',
  },
  {
    id: 95,
    titleNumber: 2,
    title: 'DE LOS DERECHOS, LAS GARANTÍAS Y LOS DEBERES',
    chapterNumber: 5,
    chapter: 'DE LOS DEBERES Y OBLIGACIONES',
    articleNumber: 95,
    content:
      'La calidad de colombiano enaltece a todos los miembros de la comunidad nacional. Todos están en el deber de engrandecerla y dignificarla. El ejercicio de los derechos y libertades reconocidos en esta Constitución implica responsabilidades. Toda persona está obligada a cumplir la Constitución y las leyes. Son deberes de la persona y del ciudadano: 1. Respetar los derechos ajenos y no abusar de los propios; 2. Obrar conforme al principio de solidaridad social, respondiendo con acciones humanitarias ante situaciones que pongan en peligro la vida o la salud de las personas; 3. Respetar y apoyar a las autoridades democráticas legítimamente constituidas para mantener la independencia y la integridad nacionales. 4. Defender y difundir los derechos humanos como fundamento de la convivencia pacífica; taria del país; 6. Propender al logro y mantenimiento de la paz; 7. Colaborar para el buen funcionamiento de la administración de la justicia; 8. Proteger los recursos culturales y naturales del país y velar por la conservación de un ambiente sano; 9. Contribuir al financiamiento de los gastos e inversiones del Estado dentro de conceptos de justicia y equidad.',
  },
  {
    id: 96,
    titleNumber: 3,
    title: 'DE LOS HABITANTES Y DEL TERRITORIO',
    chapterNumber: 1,
    chapter: 'DE LA NACIONALIDAD',
    articleNumber: 96,
    content:
      'Acto Legislativo 01 de 2002, artículo 1. El artículo 96 de la Constitución Política quedará así: Son nacionales colombianos. 1. Por nacimiento: a) Los naturales de Colombia, que con una de dos condiciones: que el padre o la madre hayan sido naturales o nacionales colombianos o que, siendo hijos de extranjeros, alguno de sus padres estuviere domiciliado en la República en el momento del nacimiento y; b) Los hijos de padre o madre colombianos que hubieren nacido en tierra extranjera y luego se domiciliaren en territorio colombiano o registraren en una oficina consular de la República. 2. Por adopción: a) Los extranjeros que soliciten y obtengan carta de naturalización, de acuerdo con la ley, la cual establecerá los casos en los cuales se pierde la nacionalidad colombiana por adopción; b) Los latinoamericanos y del Caribe por nacimiento domiciliados en Colombia, que con autorización del Gobierno y de acuerdo con la ley y el principio de reciprocidad, pidan ser inscritos como colombianos ante la municipalidad donde se establecieren, y; c) Los miembros de los pueblos indígenas que comparten territorios fronterizos, con aplicación del principio de reciprocidad según tratados públicos. Ningún colombiano por nacimiento podrá ser privado de su nacionalidad. La calidad de nacional colombiano no se pierde por el hecho de adquirir otra nacionalidad. Los nacionales por adopción no estarán obligados a renunciar a su nacionalidad de origen o adopción. Quienes hayan renunciado a la nacionalidad colombiana podrán recobrarla con arreglo a la ley.',
  },
  {
    id: 97,
    titleNumber: 3,
    title: 'DE LOS HABITANTES Y DEL TERRITORIO',
    chapterNumber: 1,
    chapter: 'DE LA NACIONALIDAD',
    articleNumber: 97,
    content:
      'El colombiano, aunque haya renunciado a la calidad de nacional, que actúe contra los intereses del país en guerra exterior contra Colombia, será juzgado y penado como traidor. Los colombianos por adopción y los extranjeros domiciliados en Colombia, no podrán ser obligados a tomar las armas contra su país de origen; tampoco lo serán los colombianos nacionalizados en país extranjero, contra el país de su nueva nacionalidad.',
  },
  {
    id: 98,
    titleNumber: 3,
    title: 'DE LOS HABITANTES Y DEL TERRITORIO',
    chapterNumber: 2,
    chapter: 'DE LA CIUDADANÍA',
    articleNumber: 98,
    content:
      'La ciudadanía se pierde de hecho cuando se ha renunciado a la nacionalidad, y su ejercicio se puede suspender en virtud de decisión judicial en los casos que determine la ley. Quienes hayan sido suspendidos en el ejercicio de la ciudadanía, podrán solicitar su rehabilitación. Parágrafo. Mientras la ley no decida otra edad, la ciudadanía se ejercerá a partir de los dieciocho años.',
  },
  {
    id: 99,
    titleNumber: 3,
    title: 'DE LOS HABITANTES Y DEL TERRITORIO',
    chapterNumber: 2,
    chapter: 'DE LA CIUDADANÍA',
    articleNumber: 99,
    content:
      'La calidad de ciudadano en ejercicio es condición previa e indispensable para ejercer el derecho de sufragio, para ser elegido y para desempeñar cargos públicos que lleven anexa autoridad o jurisdicción.',
  },
  {
    id: 100,
    titleNumber: 3,
    title: 'DE LOS HABITANTES Y DEL TERRITORIO',
    chapterNumber: 3,
    chapter: 'DE LOS EXTRANJEROS',
    articleNumber: 100,
    content:
      'Los extranjeros disfrutarán en Colombia de los mismos derechos civiles que se conceden a los colombianos. No obstante, la ley podrá, por razones de orden público, subordinar a condiciones especiales o negar el ejercicio de determinados derechos civiles a los extranjeros. Asimismo, los extranjeros gozarán, en el territorio de la República, de las garantías concedidas a los nacionales, salvo las limitaciones que establezcan la Constitución o la ley. Los derechos políticos se reservan a los nacionales, pero la ley podrá conceder a los extranjeros residentes en Colombia el derecho al voto en las elecciones y consultas populares de carácter municipal o distrital.',
  },
  {
    id: 101,
    titleNumber: 3,
    title: 'DE LOS HABITANTES Y DEL TERRITORIO',
    chapterNumber: 4,
    chapter: 'DEL TERRITORIO',
    articleNumber: 101,
    content:
      'Los límites de Colombia son los establecidos en los tratados internacionales aprobados por el Congreso, debidamente ratificados por el Presidente de la República, y los definidos por los laudos arbitrales en que sea parte la nación. Los límites señalados en la forma prevista por esta Constitución, solo podrán modificarse en virtud de tratados aprobados por el Congreso, debidamente ratificados por el Presidente de la República. Forman parte de Colombia, además del territorio continental, el archipiélago de San Andrés, Providencia y Santa Catalina y la Isla de Malpelo, y demás islas, islotes, cayos, morros y bancos que le pertenecen. También son parte de Colombia, el subsuelo, el mar territorial, la zona contigua, la plataforma continental, la zona económica exclusiva, el espacio aéreo, el segmento de la órbita geoestacionaria, el espectro electromagnético y el espacio donde actúa, de conformidad con el Derecho Internacional o con las leyes colombianas a falta de normas internacionales.',
  },
  {
    id: 102,
    titleNumber: 3,
    title: 'DE LOS HABITANTES Y DEL TERRITORIO',
    chapterNumber: 4,
    chapter: 'DEL TERRITORIO',
    articleNumber: 102,
    content:
      'El territorio, con los bienes públicos que de él forman parte, pertenece a la nación.',
  },
  {
    id: 103,
    titleNumber: 4,
    title: 'DE LA PARTICIPACIÓN DEMOCRÁTICA Y DE LOS PARTIDOS POLÍTICOS',
    chapterNumber: 1,
    chapter: 'DE LAS FORMAS DE PARTICIPACIÓN DEMOCRÁTICA',
    articleNumber: 103,
    content:
      'Son mecanismos de participación del pueblo en ejercicio de su soberanía el voto, el plebiscito, el referendo, la consulta popular, el cabildo abierto, la iniciativa legislativa y la revocatoria del mandato. La ley los reglamentará. El Estado contribuirá a la organización, promoción y capacitación de las asociaciones profesionales, cívicas, sindicales, comunitarias, juveniles, benéficas o de utilidad común no gubernamentales, sin detrimento de su autonomía con el objeto de que constituyan mecanismos democráticos de representación en las diferentes instancias de participación, concertación, control y vigilancia de la gestión pública que se establezcan.',
  },
  {
    id: 104,
    titleNumber: 4,
    title: 'DE LA PARTICIPACIÓN DEMOCRÁTICA Y DE LOS PARTIDOS POLÍTICOS',
    chapterNumber: 1,
    chapter: 'DE LAS FORMAS DE PARTICIPACIÓN DEMOCRÁTICA',
    articleNumber: 104,
    content:
      'El Presidente de la República, con la firma de todos los ministros y previo concepto favorable del Senado de la República, podrá consultar al pueblo decisiones de trascendencia nacional. La decisión del pueblo será obligatoria. La consulta no podrá realizarse en concurrencia con otra elección.',
  },
  {
    id: 146,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 2,
    chapter: 'DE LA REUNIÓN Y EL FUNCIONAMIENTO',
    articleNumber: 146,
    content:
      'En el Congreso pleno, en las Cámaras y en sus comisiones permanentes, las decisiones se tomarán por la mayoría de los votos de los asistentes, salvo que la Constitución exija expresamente una mayoría especial.',
  },
  {
    id: 105,
    titleNumber: 4,
    title: 'DE LA PARTICIPACIÓN DEMOCRÁTICA Y DE LOS PARTIDOS POLÍTICOS',
    chapterNumber: 1,
    chapter: 'DE LAS FORMAS DE PARTICIPACIÓN DEMOCRÁTICA',
    articleNumber: 105,
    content:
      'Previo cumplimiento de los requisitos y formalidades que señale el estatuto general de la organización territorial y en los casos que este determine, los gobernadores y alcaldes según el caso, podrán realizar consultas populares para decidir sobre asuntos de competencia del respectivo departamento o municipio',
  },
  {
    id: 106,
    titleNumber: 4,
    title: 'DE LA PARTICIPACIÓN DEMOCRÁTICA Y DE LOS PARTIDOS POLÍTICOS',
    chapterNumber: 1,
    chapter: 'DE LAS FORMAS DE PARTICIPACIÓN DEMOCRÁTICA',
    articleNumber: 106,
    content:
      'Previo el cumplimiento de los requisitos que la ley señale y en los casos que esta determine, los habitantes de las entidades territoriales podrán presentar proyectos sobre asuntos que son de competencia de la respectiva corporación pública, la cual está obligada a tramitarlos; decidir sobre las disposiciones de interés de la comunidad a iniciativa de la autoridad o corporación correspondiente o por no menos del 10% de los ciudadanos inscritos en el respectivo censo electoral, y elegir representantes en las juntas de las empresas que prestan servicios públicos dentro de la entidad territorial respectiva.',
  },
  {
    id: 107,
    titleNumber: 4,
    title: 'DE LA PARTICIPACIÓN DEMOCRÁTICA Y DE LOS PARTIDOS POLÍTICOS',
    chapterNumber: 2,
    chapter: 'DE LOS PARTIDOS Y DE LOS MOVIMIENTOS POLÍTICOS',
    articleNumber: 107,
    content:
      'Acto Legislativo 01 de 2009, artículo 1°. El artículo 107 de la Constitución quedará así: Se garantiza a todos los ciudadanos el derecho a fundar, organizar y desarrollar partidos y movimientos políticos, y la libertad de afiliarse a ellos o de retirarse. En ningún caso se permitirá a los ciudadanos pertenecer simultáneamente a más de un partido o movimiento político con personería jurídica. Los partidos y movimientos políticos se organizarán democráticamente y tendrán como principios rectores la transparencia, objetividad, moralidad, la equidad de género, y el deber de presentar y divulgar sus programas políticos. Para la toma de sus decisiones o la escogencia de sus candidatos propios o por coalición, podrán celebrar consultas populares o internas o interpartidistas que coincidan o no con las elecciones a corporaciones públicas, de acuerdo con lo previsto en sus estatutos y en la ley. En el caso de las consultas populares se aplicarán las normas sobre financiación y publicidad de campañas y acceso a los medios de comunicación del Estado, que rigen para las elecciones ordinarias. Quien participe en las consultas de un partido o movimiento político o en consultas interpartidistas, no podrá inscribirse por otro en el mismo proceso electoral. El resultado de las consultas será obligatorio. Los directivos de los partidos y movimientos políticos deberán propiciar procesos de democratización interna y el fortalecimiento del régimen de bancadas. Los partidos y movimientos políticos deberán responder por toda violación o contravención a las normas que rigen su organización, funcionamiento o financiación, así como también por avalar candidatos elegidos en cargos o corporaciones públicas de elección popular, quienes hayan sido o fueren condenados durante el ejercicio del cargo al cual se avaló mediante sentencia ejecutoriada en Colombia o en el exterior por delitos relacionados con la vinculación a grupos armados ilegales y actividades del narcotráfico o de delitos contra los mecanismos de participación democrática o de lesa humanidad. Los partidos o movimientos políticos también responderán por avalar a candidatos no elegidos para cargos o corporaciones públicas de elección popular, si estos hubieran sido o fueren condenados durante el período del cargo público al cual se candidatizó, mediante sentencia ejecutoriada en Colombia o en el exterior por delitos relacionados con la vinculación a grupos armados ilegales y actividades del narcotráfico, cometidos con anterioridad a la expedición del aval correspondiente. Las sanciones podrán consistir en multas, devolución de los recursos públicos percibidos mediante el sistema de reposición de votos, hasta la cancelación de la personería jurídica. Cuando se trate de estas condenas a quienes fueron electos para cargos uninominales, el partido o movimiento que avaló al condenado, no podrá presentar candidatos para las siguientes elecciones en esa Circunscripción. Si faltan menos de 18 meses para las siguientes elecciones, no podrán presentar terna, caso en el cual, el nominador podrá libremente designar el reemplazo. Los directivos de los partidos a quienes se demuestre que no han procedido con el debido cuidado y diligencia en el ejercicio de los derechos y obligaciones que les confiere personería jurídica, también estarán sujetos a las sanciones que determine la ley. También se garantiza a las organizaciones sociales el derecho a manifestarse y a participar en eventos políticos. Quien siendo miembro de una corporación pública decida presentarse a la siguiente elección, por un partido distinto, deberá renunciar a la curul al menos doce (12) meses antes del primer día de inscripciones.Parágrafo transitorio 1°. Sin perjuicio de lo dispuesto por el artículo 134, dentro de los dos (2) meses siguientes a la entrada en vigencia del presente acto legislativo, autorízase, por una sola vez, a los miembros de los cuerpos colegiados de elección popular, o a quienes hubieren renunciado a su curul con anterioridad a la vigencia del presente acto legislativo, para inscribirse en un partido distinto al que los avaló, sin renunciar a la curul o incurrir en doble militancia. Parágrafo transitorio 2°. El Gobierno nacional o los miembros del Congreso presentarán, antes del 1° de agosto de 2009, un Proyecto de Ley Estatutaria que desarrolle este artículo. El proyecto tendrá mensaje de urgencia y sesiones conjuntas y podrá ser objeto de mensaje de insistencia si fuere necesario. Se reducen a la mitad los términos para la revisión previa de exequibilidad del Proyecto de Ley Estatutaria, por parte de la Corte Constitucional.',
  },
  {
    id: 108,
    titleNumber: 4,
    title: 'DE LA PARTICIPACIÓN DEMOCRÁTICA Y DE LOS PARTIDOS POLÍTICOS',
    chapterNumber: 2,
    chapter: 'DE LOS PARTIDOS Y DE LOS MOVIMIENTOS POLÍTICOS',
    articleNumber: 108,
    content:
      'Acto Legislativo 01 de 2009, artículo 2. El artículo 108 de la Constitución quedará así: El Consejo Nacional Electoral reconocerá personería jurídica a los partidos, movimientos políticos y grupos significativos de ciudadanos. Estos podrán obtenerlas con votación no inferior al tres por ciento (3%) de los votos emitidos válidamente en el territorio nacional en elecciones de Cámara de Representantes o Senado. Las perderán si no consiguen ese porcentaje en las elecciones de las mismas corporaciones públicas. Se exceptúa el régimen excepcional que se estatuya en la ley para las circunscripciones de minorías étnicas y políticas, en las cuales bastará haber obtenido representación en el Congreso. También será causal de pérdida de la personería jurídica de los partidos y movimientos políticos si estos no celebran por lo menos durante cada dos (2) años convenciones que posibiliten a sus miembros influir en la toma de las decisiones más importantes de la organización política. Los partidos y movimientos políticos con personería jurídica reconocida podrán inscribir candidatos a elecciones. Dicha inscripción deberá ser avalada para los mismos efectos por el respectivo representante legal del partido o movimiento o por quien él delegue. Los movimientos sociales y grupos significativos de ciudadanos también podrán inscribir candidatos. Toda inscripción de candidato incurso en causal de inhabilidad, será revocada por el Consejo Nacional Electoral con respeto al debido proceso. Los estatutos de los partidos y movimientos políticos regularán lo atinente a su régimen disciplinario interno. Los miembros de las corporaciones públicas elegidos por un mismo partido o movimiento político o grupo significativo de ciudadanos actuarán en ellas como bancada en los términos que señale la ley y de conformidad con las decisiones adoptadas democráticamente por estas. Los estatutos internos de los partidos y movimientos políticos determinarán los asuntos de conciencia respecto de los cuales no se aplicará este régimen y podrán establecer sanciones por la inobservancia de sus directrices por parte de los miembros de las bancadas, las cuales se fijarán gradualmente hasta la expulsión, y podrán incluir la pérdida del derecho de voto del congresista, diputado, concejal o edil por el resto del período para el cual fue elegido. Parágrafo transitorio. Para las elecciones al Congreso de la República a celebrarse en 2010, el porcentaje a que se refiere el inciso 1° del presente artículo será del dos por ciento (2%), y no se requerirá del requisito de inscripción con un año de antelación del que habla el inciso 8°. (El inciso 8° del Acto Legislativo 01 de 2009, fue declarado inexequible)',
  },
  {
    id: 109,
    titleNumber: 4,
    title: 'DE LA PARTICIPACIÓN DEMOCRÁTICA Y DE LOS PARTIDOS POLÍTICOS',
    chapterNumber: 2,
    chapter: 'DE LOS PARTIDOS Y DE LOS MOVIMIENTOS POLÍTICOS',
    articleNumber: 109,
    content:
      'Acto Legislativo 01 de 2009, artículo 3°. El artículo 109 de la Constitución quedará así: El Estado concurrirá a la financiación política y electoral de los partidos y movimientos políticos con personería jurídica, de conformidad con la ley. Las campañas electorales que adelanten los candidatos avalados por partidos y movimientos con personería jurídica o por grupos significativos de ciudadanos, serán financiadas parcialmente con recursos estatales. La ley determinará el porcentaje de votación necesario para tener derecho a dicha financiación. También se podrá limitar el monto de los gastos que los partidos, movimientos, grupos significativos de ciudadanos o candidatos puedan realizar en las campañas electorales, así como la máxima cuantía de las contribuciones privadas, de acuerdo con la ley. Un porcentaje de esta financiación se entregará a partidos y movimientos con personería jurídica vigente, y a los grupos significativos de ciudadanos que avalen candidatos, previamente a la elección, o las consultas de acuerdo con las condiciones y garantías que determine la ley y con autorización del Consejo Nacional Electoral. Las campañas para elegir Presidente de la República dispondrán de acceso a un máximo de espacios publicitarios y espacios institucionales de radio y televisión costeados por el Estado, para aquellos candidatos de partidos, movimientos y grupos significativos de ciudadanos cuya postulación cumpla los requisitos de seriedad que, para el efecto, determine la ley. Para las elecciones que se celebren a partir de la vigencia del presente acto legislativo, la violación de los topes máximos de financiación de las campañas, debidamente comprobada, será sancionada con la pérdida de investidura o del cargo. La ley reglamentará los demás efectos por la violación de este precepto. Los partidos, movimientos, grupos significativos de ciudadanos y candidatos deberán rendir públicamente cuentas sobre el volumen, origen y destino de sus ingresos. Es prohibido a los partidos y movimientos políticos y a grupos significativos de ciudadanos, recibir financiación para campañas electorales, de personas naturales o jurídicas extranjeras. Ningún tipo de financiación privada podrá tener fines antidemocráticos o atentatorios del orden público. Parágrafo. La financiación anual de los partidos y movimientos políticos con personería jurídica ascenderá como mínimo a dos punto siete (2.7) veces la aportada en el año 2003, manteniendo su valor en el tiempo. La cuantía de la financiación de las campañas de los partidos y movimientos políticos con personería jurídica será por lo menos tres veces la aportada en el período 1999-2002 en pesos constantes de 2003. Ello incluye el costo del transporte del día de elecciones y el costo de las franquicias de correo hoy financiadas. Las consultas de los partidos y movimientos que opten por este mecanismo recibirán financiación mediante el sistema de reposición por votos depositados, manteniendo para ello el valor en pesos constantes vigente en el momento de aprobación de este acto legislativo. Parágrafo transitorio. El Gobierno nacional o los miembros del Congreso presentarán, antes del 1° de agosto de 2009, un Proyecto de Ley Estatutaria que desarrolle este artículo. El proyecto tendrá mensaje de urgencia y podrá ser objeto de mensaje de insistencia si fuere necesario. Se reducen a la mitad los términos para la revisión previa de exequibilidad del Proyecto de Ley Estatutaria, por parte de la Corte Constitucional.',
  },
  {
    id: 110,
    titleNumber: 4,
    title: 'DE LA PARTICIPACIÓN DEMOCRÁTICA Y DE LOS PARTIDOS POLÍTICOS',
    chapterNumber: 2,
    chapter: 'DE LOS PARTIDOS Y DE LOS MOVIMIENTOS POLÍTICOS',
    articleNumber: 110,
    content:
      'Se prohíbe a quienes desempeñan funciones públicas hacer contribución alguna a los partidos, movimientos o candidatos, o inducir a otros a que lo hagan, salvo las excepciones que establezca la ley. El incumplimiento de cualquiera de estas prohibiciones será causal de remoción del cargo o de pérdida de la investidura.',
  },
  {
    id: 111,
    titleNumber: 4,
    title: 'DE LA PARTICIPACIÓN DEMOCRÁTICA Y DE LOS PARTIDOS POLÍTICOS',
    chapterNumber: 2,
    chapter: 'DE LOS PARTIDOS Y DE LOS MOVIMIENTOS POLÍTICOS',
    articleNumber: 111,
    content:
      'Acto Legislativo 01 de 2003, artículo 4°. El artículo 111 de la Constitución quedará así: Los partidos y movimientos políticos con personería jurídica tienen derecho a utilizar los medios de comunicación que hagan uso del espectro electromagnético, en todo tiempo, conforme a la ley. Ella establecerá asimismo los casos y la forma como los partidos, los movimientos políticos y los candidatos debidamente inscritos, tendrán acceso a dichos medios.',
  },
  {
    id: 112,
    titleNumber: 4,
    title: 'DE LA PARTICIPACIÓN DEMOCRÁTICA Y DE LOS PARTIDOS POLÍTICOS',
    chapterNumber: 3,
    chapter: 'DEL ESTATUTO DE LA OPOSICIÓN',
    articleNumber: 112,
    content:
      'Acto Legislativo 1 de 2003, artículo 5°. El artículo 111 de la Constitución quedará así: Los partidos y movimientos políticos con personería jurídica que se declaren en oposición al Gobierno, podrán ejercer libremente la función crítica frente a este, y plantear y desarrollar alternativas políticas. Para estos efectos, se les garantizarán los siguientes derechos: el acceso a la información y a la documentación oficial, con las restricciones constitucionales y legales; el uso de los medios de comunicación social del Estado o en aquellos que hagan uso del espectro electromagnético de acuerdo con la representación obtenida en las elecciones para Congreso inmediatamente anteriores; la réplica en los mismos medios de comunicación. Los partidos y movimientos minoritarios con personería jurídica tendrán derecho a participar en las mesas directivas de los cuerpos colegiados, según su representación en ellos. Una ley estatutaria reglamentará íntegramente la materia. Acto Legislativo 02 de 2015. Artículo 1°. Adiciónense los incisos 4°, 5° y 6° al artículo 112 de la Constitución Política, los cuales quedarán así: El candidato que le siga en votos a quien la autoridad electoral declare elegido en el cargo de Presidente y Vicepresidente de la República, gobernador de departamento, alcalde distrital y alcalde municipal tendrá el derecho personal a ocupar una curul en el Senado, Cámara de Representantes, Asamblea Departamental, Concejo Distrital y Concejo Municipal, respectivamente, durante el período de la correspondiente corporación. Las curules así asignadas en el Senado de la República y en la Cámara de Representantes serán adicionales a las previstas en los artículos 171 y 176. Las demás curules no aumentarán el número de miembros de dichas corporaciones. En caso de no aceptación de la curul en las corporaciones públicas de las entidades territoriales, la misma se asignará de acuerdo con la regla general de asignación de curules prevista en el artículo 263. Parágrafo transitorio. La asignación de las curules mencionadas en este artículo no será aplicable para las elecciones celebradas en el año 2015.',
  },
  {
    id: 113,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 1,
    chapter: 'DE LA ESTRUCTURA DEL ESTADO',
    articleNumber: 113,
    content:
      'Son Ramas del Poder Público, la legislativa, la ejecutiva, y la judicial. Además de los órganos que las integran existen otros, autónomos e independientes, para el cumplimiento de las demás funciones del Estado. Los diferentes órganos del Estado tienen funciones separadas pero colaboran armónicamente para la realización de sus fines.',
  },
  {
    id: 114,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 1,
    chapter: 'DE LA ESTRUCTURA DEL ESTADO',
    articleNumber: 114,
    content:
      'Corresponde al Congreso de la República reformar la Constitución, hacer las leyes y ejercer control político sobre el gobierno y la administración. El Congreso de la República, estará integrado por el Senado y la Cámara de Representantes.',
  },
  {
    id: 115,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 1,
    chapter: 'DE LA ESTRUCTURA DEL ESTADO',
    articleNumber: 115,
    content:
      'El Presidente de la República es Jefe del Estado, Jefe del Gobierno y suprema autoridad administrativa. El Gobierno nacional está formado por el Presidente de la República, los ministros del despacho y los directores de departamentos administrativos. El Presidente y el ministro o director de departamento correspondientes, en cada negocio particular, constituyen el Gobierno. Ningún acto del Presidente, excepto el de nombramiento y remoción de ministros y directores de departamentos administrativos y aquellos expedidos en su calidad de Jefe del Estado y de suprema autoridad administrativa, tendrá valor ni fuerza alguna mientras no sea suscrito y comunicado por el Ministro del ramo respectivo o por el Director del Departamento Administrativo correspondiente, quienes, por el mismo hecho, se hacen responsables. Las gobernaciones y las alcaldías, así como las superintendencias, los establecimientos públicos y las empresas industriales o comerciales del Estado, forman parte de la Rama Ejecutiva.',
  },
  {
    id: 116,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 1,
    chapter: 'DE LA ESTRUCTURA DEL ESTADO',
    articleNumber: 116,
    content:
      'Acto Legislativo 03 de 2002, artículo 1°. El artículo 116 de la Constitución quedará así: La Corte Constitucional, la Corte Suprema de Justicia, el Consejo de Estado, *Comisión Nacional de Disciplina, la Fiscalía General de la Nación, los Tribunales y los Jueces, administran justicia. También lo hace la Justicia Penal Militar. * Acto Legislativo 02 de 2015 Artículo 26. Concordancias, vigencias y derogatorias. Sustitúyase la expresión “Consejo Superior de la Judicatura” por la de “Comisión Nacional de Disciplina Judicial” en el artículo 116 de la Constitución Política. El Congreso ejercerá determinadas funciones judiciales. Excepcionalmente la ley podrá atribuir función jurisdiccional en materias precisas a determinadas autoridades administrativas. Sin embargo, no les será permitido adelantar la instrucción de sumarios ni juzgar delitos. Los particulares pueden ser investidos transitoriamente de la función de administrar justicia en la condición de jurados en las causas criminales, conciliadores o en la de árbitros habilitados por las partes para proferir fallos en derecho o en equidad, en los términos que determine la ley. Acto Legislativo 02 de 2012, artículo 1°. Adiciónese el artículo 116 de la Constitución Política con los siguientes incisos: Créase un Tribunal de Garantías Penales que tendrá competencia en todo el territorio nacional y en cualquier jurisdicción penal, y ejercerá las siguientes funciones: De manera preferente, servir de juez de control de garantías en cualquier investigación o proceso penal que se adelante contra miembros de la Fuerza Pública. De manera preferente, controlar la acusación penal contra miembros de la Fuerza Pública, con el fin de garantizar que se cumplan los presupuestos materiales y formales para iniciar el juicio oral. De manera permanente, dirimir los conflictos de competencia que ocurran entre la Jurisdicción Ordinaria y la Jurisdicción Penal Militar. Las demás funciones que le asigne la ley. El Tribunal de Garantías estará integrado por ocho (8) magistrados, cuatro (4) de los cuales serán miembros de la Fuerza Pública en retiro. Sus miembros serán elegidos por la Sala de Gobierno de la Corte Suprema de Justicia, la Sala de Gobierno del Consejo de Estado y la Corte Constitucional en pleno. Los miembros de la Fuerza Pública en retiro de este Tribunal serán elegidos de cuatro (4) ternas que enviará el Presidente de la República. Una ley estatutaria establecerá los requisitos exigidos para ser magistrado, el régimen de inhabilidades e incompatibilidades, el mecanismo de postulación de candidatos, el procedimiento para su selección y demás aspectos de organización y funcionamiento del Tribunal de Garantías Penales. Parágrafo transitorio. El Tribunal de Garantías Penales empezará a ejercer funciones asignadas en este artículo, una vez entre en vigencia la ley estatutaria que lo reglamente. Inexequible C-740/2013.',
  },
  {
    id: 117,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 1,
    chapter: 'DE LA ESTRUCTURA DEL ESTADO',
    articleNumber: 117,
    content:
      'El Ministerio Público y la Contraloría General de la República son órganos de control.',
  },
  {
    id: 118,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 1,
    chapter: 'DE LA ESTRUCTURA DEL ESTADO',
    articleNumber: 118,
    content:
      'El Ministerio Público será ejercido por el Procurador General de la Nación, por el Defensor del Pueblo, por los procuradores delegados y los agentes del ministerio público, ante las autoridades jurisdiccionales, por los personeros municipales y por los demás funcionarios que determine la ley. Al Ministerio Público corresponde la guarda y promoción de los derechos humanos, la protección del interés público y la vigilancia de la conducta oficial de quienes desempeñan funciones públicas.',
  },
  {
    id: 119,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 1,
    chapter: 'DE LA ESTRUCTURA DEL ESTADO',
    articleNumber: 119,
    content:
      'La Contraloría General de la República tiene a su cargo la vigilancia de la gestión fiscal y el control de resultado de la administración.',
  },
  {
    id: 120,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 1,
    chapter: 'DE LA ESTRUCTURA DEL ESTADO',
    articleNumber: 120,
    content:
      'La organización electoral está conformada por el Consejo Nacional Electoral, por la Registraduría Nacional del Estado Civil y por los demás organismos que establezca la ley. Tiene a su cargo la organización de las elecciones, su dirección y vigilancia, así como lo relativo a la identidad de las personas.',
  },
  {
    id: 121,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 1,
    chapter: 'DE LA ESTRUCTURA DEL ESTADO',
    articleNumber: 121,
    content:
      'Ninguna autoridad del Estado podrá ejercer funciones distintas de las que le atribuyen la Constitución y la ley',
  },
  {
    id: 122,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 2,
    chapter: 'DE LA FUNCIÓN PÚBLICA',
    articleNumber: 122,
    content:
      'No habrá empleo público que no tenga funciones detalladas en ley o reglamento, y para proveer los de carácter remunerado se requiere que estén contemplados en la respectiva planta y previstos sus emolumentos en el presupuesto correspondiente. Ningún servidor público entrará a ejercer su cargo sin prestar juramento de cumplir y defender la Constitución y desempeñar los deberes que le incumben. Antes de tomar posesión del cargo, al retirarse del mismo o cuando autoridad competente se lo so licite deberá declarar, bajo juramento, el monto de sus bienes y rentas. Dicha declaración solo podrá ser utilizada para los fines y propósitos de la aplicación de las normas del servidor público. Acto Legislativo 01 de 2009, artículo 4°. El inciso final del artículo 122 de la Constitución Política quedará así: Sin perjuicio de las demás sanciones que establezca la ley, no podrán ser inscritos como candidatos a cargos de elección popular, ni elegidos, ni designados como servidores públicos, ni celebrar personalmente, o por interpuesta persona, contratos con el Estado, quienes hayan sido condenados, en cualquier tiempo, por la comisión de delitos que afecten el patrimonio del Estado o quienes hayan sido condenados por delitos relacionados con la pertenencia, promoción o financiación de grupos armados ilegales, delitos de lesa humanidad o por narcotráfico en Colombia o en el exterior. Tampoco quien haya dado lugar, como servidores públicos, con su conducta dolosa o gravemente culposa, así calificada por sentencia ejecutoriada, a que el Estado sea condenado a una reparación patrimonial, salvo que asuma con cargo a su patrimonio el valor del daño.',
  },
  {
    id: 123,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 2,
    chapter: 'DE LA FUNCIÓN PÚBLICA',
    articleNumber: 123,
    content:
      'Son servidores públicos los miembros de las corporaciones públicas, los empleados y trabajadores del Estado y de sus entidades descentralizadas territorialmente y por servicios. Los servidores públicos están al servicio del Estado y de la comunidad; ejercerán sus funciones en la forma prevista por la Constitución, la ley y el reglamento. La ley determinará el régimen aplicable a los particulares que temporalmente desempeñen funciones públicas y regulará su ejercicio.',
  },
  {
    id: 124,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 2,
    chapter: 'DE LA FUNCIÓN PÚBLICA',
    articleNumber: 124,
    content:
      'La ley determinará la responsabilidad de los servidores públicos y la manera de hacerla efectiva.',
  },
  {
    id: 125,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 2,
    chapter: 'DE LA FUNCIÓN PÚBLICA',
    articleNumber: 125,
    content:
      'Los empleos en los órganos y entidades del Estado son de carrera. Se exceptúan los de elección popular, los de libre nombramiento y remoción, los de trabajadores oficiales y los demás que determine la ley. Los funcionarios, cuyo sistema de nombramiento no haya sido determinado por la Constitución o la ley, serán nombrados por concurso público. El ingreso a los cargos de carrera y el ascenso en los mismos, se harán previo cumplimiento de los requisitos y condiciones que fije la ley para determinar los méritos y calidades de los aspirantes. El retiro se hará por calificación no satisfactoria en el desempeño del empleo; por violación del régimen disciplinario y por las demás causales previstas en la Constitución o la ley. En ningún caso la filiación política de los ciudadanos podrá determinar su nombramiento para un empleo de carrera, su ascenso o remoción. Parágrafo. Acto Legislativo 01 de 2003, artículo 6°. El artículo 125 de la Constitución Política tendrá un parágrafo del siguiente tenor: Los períodos establecidos en la Constitución Política o en la ley para cargos de elección tienen el carácter de institucionales. Quienes sean designados o elegidos para ocupar tales cargos, en reemplazo por falta absoluta de su titular, lo harán por el resto del período para el cual este fue elegido.',
  },
  {
    id: 147,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 2,
    chapter: 'DE LA REUNIÓN Y EL FUNCIONAMIENTO',
    articleNumber: 147,
    content:
      'Las mesas directivas de las cámaras y de sus comisiones permanentes serán renovadas cada año, para la legislatura que se inicia el 20 de julio, y ninguno de sus miembros podrá ser reelegido dentro del mismo cuatrienio constitucional.',
  },
  {
    id: 148,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 2,
    chapter: 'DE LA REUNIÓN Y EL FUNCIONAMIENTO',
    articleNumber: 148,
    content:
      'Las normas sobre quórum y mayorías decisorias regirán también para las demás corporaciones públicas de elección popular.',
  },
  {
    id: 126,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 2,
    chapter: 'DE LA FUNCIÓN PÚBLICA',
    articleNumber: 126,
    content:
      'Acto Legislativo 02 de 2015. Artículo 2°. El artículo 126 de la Constitución Política quedará así: Los servidores públicos no podrán en ejercicio de sus funciones, nombrar, postular, ni contratar con personas con las cuales tengan parentesco hasta el cuarto grado de consanguinidad, segundo de afinidad, primero civil, o con quien estén ligados por matrimonio o unión permanente. Tampoco podrán nombrar ni postular como servidores públicos, ni celebrar contratos estatales, con quienes hubieren intervenido en su postulación o designación, ni con personas que tengan con estas los mismos vínculos señalados en el inciso anterior. Se exceptúan de lo previsto en este artículo los nombramientos que se hagan en aplicación de las normas vigentes sobre ingreso o ascenso por méritos en cargos de carrera. Salvo los concursos regulados por la ley, la elección de servidores públicos atribuida a corporaciones públicas deberá estar precedida de una convocatoria pública reglada por la ley, en la que se fijen requisitos y procedimientos que garanticen los principios de publicidad, transparencia, participación ciudadana, equidad de género y criterios de mérito para su selección. Quien haya ejercido en propiedad alguno de los cargos en la siguiente lista, no podrá ser reelegido para el mismo. Tampoco podrá ser nominado para otro de estos cargos, ni ser elegido a un cargo de elección popular, sino un año después de haber cesado en el ejercido de sus funciones: Magistrado de la Corte Constitucional, de la Corte Suprema de Justicia, del Consejo de Estado, de la Comisión Nacional de Disciplina Judicial, Miembro de la Comisión de Aforados, Miembro del Consejo Nacional Electoral, Fiscal General de la Nación, Procurador General de la Nación, Defensor del Pueblo, Contralor General de la República y Registrador Nacional del Estado Civil.',
  },
  {
    id: 127,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 2,
    chapter: 'DE LA FUNCIÓN PÚBLICA',
    articleNumber: 127,
    content:
      'Los servidores públicos no podrán celebrar, por sí o por interpuesta persona, o en representación de otro, contrato alguno con entidades públicas o con personas privadas que manejen o administren recursos públicos, salvo las excepciones legales. Acto Legislativo 02 de 2004, artículo 1°. Modifícanse los incisos 2° y 3° del artículo 127 de la Constitución Política y adiciónanse dos incisos finales al mismo artículo, así: A los empleados del Estado que se desempeñen en la Rama Judicial, en los órganos electorales, de control y de seguridad les está prohibido tomar parte en las actividades de los partidos y movimientos y en las controversias políticas, sin perjuicio de ejercer libremente el derecho al sufragio. A los miembros de la Fuerza Pública en servicio activo se les aplican las limitaciones contempladas en el artículo 219 de la Constitución. Los empleados no contemplados en esta prohibición solo podrán participar en dichas actividades y controversias en las condiciones que señale la Ley Estatutaria. La utilización del empleo para presionar a los ciudadanos a respaldar una causa o campaña política constituye causal de mala conducta. Acto Legislativo 02 de 2015, artículo 3°. Deróguense los incisos 5° y 6° del artículo 127 de la Constitución Política.',
  },
  {
    id: 128,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 2,
    chapter: 'DE LA FUNCIÓN PÚBLICA',
    articleNumber: 128,
    content:
      'Nadie podrá desempeñar simultáneamente más de un empleo público ni recibir más de una asignación que provenga del tesoro público, o de empresas o de instituciones en las que tenga parte mayoritaria el Estado, salvo los casos expresamente determinados por la ley. Entiéndese por tesoro público el de la nación, el de las entidades territoriales y el de las descentralizadas.',
  },
  {
    id: 129,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 2,
    chapter: 'DE LA FUNCIÓN PÚBLICA',
    articleNumber: 129,
    content:
      'Los servidores públicos no podrán aceptar cargos, honores o recompensas de gobiernos extranjeros u organismos internacionales, ni celebrar contratos con ellos, sin previa autorización del Gobierno.',
  },
  {
    id: 130,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 2,
    chapter: 'DE LA FUNCIÓN PÚBLICA',
    articleNumber: 130,
    content:
      'Habrá una Comisión Nacional del Servicio Civil responsable de la administración y vigilancia de las carreras de los servidores públicos, excepción hecha de las que tengan carácter especial',
  },
  {
    id: 131,
    titleNumber: 5,
    title: 'DE LA ORGANIZACIÓN DEL ESTADO',
    chapterNumber: 2,
    chapter: 'DE LA FUNCIÓN PÚBLICA',
    articleNumber: 131,
    content:
      'Compete a la ley la reglamentación del servicio público que prestan los notarios y registradores, la definición del régimen laboral para sus empleados y lo relativo a los aportes como tributación especial de las notarías, con destino a la administración de justicia. El nombramiento de los notarios en propiedad se hará mediante concurso. Corresponde al gobierno la creación, supresión y fusión de los círculos de notariado y registro y la determinación del número de notarios y oficinas de registro.',
  },
  {
    id: 132,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 1,
    chapter: 'DE LA RAMA LEGISLATIVA',
    articleNumber: 132,
    content:
      'Los senadores y los representantes serán elegidos para un período de cuatro años, que se inicia el 20 de julio siguiente a la elección.',
  },
  {
    id: 133,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 1,
    chapter: 'DE LA RAMA LEGISLATIVA',
    articleNumber: 133,
    content:
      'Acto Legislativo 1 de 2009, artículo 5°. El artículo 133 de la Constitución Política quedará así: Los miembros de cuerpos colegiados de elección directa representan al pueblo, y deberán actuar consultando la justicia y el bien común. El voto de sus miembros será nominal y público, excepto en los casos que determine la ley. El elegido es responsable políticamente ante la sociedad y frente a sus electores del cumplimiento de las obligaciones propias de su investidura.',
  },
  {
    id: 134,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 1,
    chapter: 'DE LA RAMA LEGISLATIVA',
    articleNumber: 134,
    content:
      'Acto Legislativo 1 de 2009, artículo 5°. El artículo 133 de la Constitución Política quedará así: Los miembros de cuerpos colegiados de elección directa representan al pueblo, y deberán actuar consultando la justicia y el bien común. El voto de sus miembros será nominal y público, excepto en los casos que determine la ley. El elegido es responsable políticamente ante la sociedad y frente a sus electores del cumplimiento de las obligaciones propias de su investidura. Para efectos de conformación de quórum se tendrá como número de miembros la totalidad de los integrantes de la Corporación con excepción de aquellas curules que no puedan ser reemplazadas. La misma regla se aplicará en los eventos de impedimentos o recusaciones aceptadas. Si por faltas absolutas que no den lugar a reemplazo los miembros de cuerpos colegiados elegidos en una misma circunscripción electoral quedan reducidos a la mitad o menos, el Consejo Nacional Electoral convocará a elecciones para llenar las vacantes, siempre y cuando falten más de veinticuatro (24) meses para la terminación del periodo. Parágrafo transitorio. Mientras el legislador regula el régimen de reemplazos, se aplicarán las siguientes reglas: i) Constituyen faltas absolutas que dan lugar a reemplazo la muerte; la incapacidad física absoluta para el ejercicio del cargo; la declaración de nulidad de la elección; la renuncia justificada y aceptada por la respectiva corporación; la sanción disciplinaria consistente en destitución, y la pérdida de investidura; ii) Constituyen faltas temporales que dan lugar a reemplazo, la licencia de maternidad y la medida de aseguramiento privativa de la libertad por delitos distintos a los mencionados en el presente artículo. La prohibición de reemplazos se aplicará para las investigaciones judiciales que se iniciaron a partir de la vigencia del Acto Legislativo número 01 de 2009, con excepción del relacionado con la comisión de delitos contra la administración pública que se aplicará para las investigaciones que se inicien a partir de la vigencia del presente acto legislativo',
  },
  {
    id: 149,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 2,
    chapter: 'DE LA REUNIÓN Y EL FUNCIONAMIENTO',
    articleNumber: 149,
    content:
      'Toda reunión de miembros del Congreso que, con el propósito de ejercer funciones propias de la rama legislativa del poder público, se efectúe fuera de las condiciones constitucionales, carecerá de validez; a los actos que realice no podrá dárseles efecto alguno, y quienes participen en las deliberaciones, serán sancionados conforme a las leyes.',
  },
  {
    id: 150,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 150,
    content:
      'Corresponde al Congreso hacer las leyes. Por medio de ellas ejerce las siguientes funciones: 1. Interpretar, reformar y derogar las leyes. 2. Expedir códigos en todos los ramos de la legislación y reformar sus disposiciones. 3. Aprobar el plan nacional de desarrollo y de inversiones públicas que hayan de emprenderse o continuarse, con la determinación de los recursos y apropiaciones que se autoricen para su ejecución, y las medidas necesarias para impulsar el cumplimiento de los mismos. 4. Definir la división general del territorio con arreglo a lo previsto en esta Constitución, fijar las bases y condiciones para crear, eliminar, modificar o fusionar entidades territoriales y establecer sus competencias. 5. Conferir atribuciones especiales a las asambleas departamentales. 6. Variar, en circunstancias extraordinarias y por graves motivos de conveniencia pública, la actual residencia de los altos poderes nacionales. 7. Determinar la estructura de la administración nacional y crear, suprimir o fusionar ministerios, departamentos administrativos, superintendencias, establecimientos públicos y otras entidades del orden nacional, señalando sus objetivos y estructura orgánica; reglamentar la creación y funcionamiento de las Corporaciones Autónomas Regionales dentro de un régimen de autonomía; Asimismo, crear o autorizar la constitución de empresas industriales y comerciales del Estado y sociedades de economía mixta. 8. Expedir las normas a las cuales debe sujetarse el Gobierno para el ejercicio de las funciones de inspección y vigilancia que le señala la Constitución. 9. Conceder autorizaciones al Gobierno para celebrar contratos, negociar empréstitos y enajenar bienes nacionales. El Gobierno rendirá periódicamente informes al Congreso sobre el ejercicio de estas autorizaciones. 10. Revestir, hasta por seis meses, al Presidente de la República de precisas facultades extraordinarias, para expedir normas con fuerza de ley cuando la necesidad lo exija o la conveniencia pública lo aconseje. Tales facultades deberán ser solicitadas expresamente por el Gobierno y su aprobación requerirá mayoría absoluta de los miembros de una y otra Cámara. El Congreso podrá, en todo tiempo y por iniciativa propia, modificar los decretos leyes dictados por el Gobierno en uso de facultades extraordinarias. Estas facultades no se podrán conferir para expedir códigos, leyes estatutarias, orgánicas, ni las previstas en el numeral 20 del presente artículo, ni para decretar impuestos. 11. Establecer las rentas nacionales y fijar los gastos de la administración. 12. Establecer contribuciones fiscales y, excepcionalmente, contribuciones parafiscales en los casos y bajo las condiciones que establezca la ley. 13. Determinar la moneda legal, la convertibilidad y el alcance de su poder liberatorio, y arreglar el sistema de pesas y medidas. 14. Aprobar o improbar los contratos o convenios que, por razones de evidente necesidad nacional, hubiere celebrado el Presidente de la República, con particulares, compañías o entidades públicas, sin autorización previa. 15. Decretar honores a los ciudadanos que hayan prestado servicios a la patria. 16. Aprobar o improbar los tratados que el Gobierno celebre con otros Estados o con entidades de derecho internacional. Por medio de dichos tratados podrá el Estado, sobre bases de equidad, reciprocidad y conveniencia nacional, transferir parcialmente determinadas atribuciones a organismos internacionales, que tengan por objeto promover o consolidar la integración económica con otros Estados. 17. Conceder, por mayoría de los dos tercios de los votos de los miembros de una y otra Cámara y por graves motivos de conveniencia pública, amnistías o indultos generales por delitos políticos. En caso de que los favorecidos fueren eximidos de la responsabilidad civil respecto de particulares, el Estado quedará obligado a las indemnizaciones a que hubiere lugar. 18. Dictar las normas sobre apropiación o adjudicación y recuperación de tierras baldías. 19. Dictar las normas generales, y señalar en ellas los objetivos y criterios a los cuales debe sujetarse el Gobierno para los siguientes efectos: a) Organizar el crédito público; b) Regular el comercio exterior y señalar el régimen de cambio internacional, en concordancia con las funciones que la Constitución consagra para la Junta Directiva del Banco de la República; c) Modificar, por razones de política comercial los aranceles, tarifas y demás disposiciones concernientes al régimen de aduanas; d) Regular las actividades financiera, bursátil, aseguradora y cualquiera otra relacionada con el manejo, aprovechamiento e inversión de los recursos captados del público; e) Fijar el régimen salarial y prestacional de los empleados públicos, de los miembros del Congreso Nacional y de la Fuerza Pública. f) Regular el régimen de prestaciones sociales mínimas de los trabajadores oficiales. Estas funciones en lo pertinente a prestaciones sociales son indelegables en las Corporaciones públicas territoriales y estas no podrán arrogárselas. 20. Crear los servicios administrativos y técnicos de las Cámaras. 21. Expedir las leyes de intervención económica, previstas en el artículo 334, las cuales deberán precisar sus fines y alcances y los límites a la libertad económica. 22. Expedir las leyes relacionadas con el Banco de la República y con las funciones que compete desempeñar a su Junta Directiva. 23. Expedir las leyes que regirán el ejercicio de las funciones públicas y la prestación de los servicios públicos. 24. Regular el régimen de propiedad industrial, patentes y marcas y las otras formas de propiedad intelectual. 25. Unificar las normas sobre policía de tránsito en todo el territorio de la República. Compete al Congreso expedir el estatuto general de contratación de la administración pública y en especial de la administración nacional.',
  },
  {
    id: 135,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 1,
    chapter: 'DE LA RAMA LEGISLATIVA',
    articleNumber: 135,
    content:
      'Son facultades de cada Cámara: 1. Elegir sus mesas directivas. 2. Elegir a su Secretario General, para períodos de dos años, contados a partir del 20 de julio, quien deberá reunir las mismas calidades señaladas para ser miembro de la respectiva Cámara. 3. Solicitar al Gobierno los informes que necesite, salvo lo dispuesto en el numeral 2 del artículo siguiente. 4. Determinar la celebración de sesiones reservadas en forma prioritaria a las preguntas orales que formulen los congresistas a los ministros y a las respuestas de estos. El reglamento regulará la materia. 5. Proveer los empleos creados por la ley para el cumplimiento de sus funciones. 6. Recabar del Gobierno la cooperación de los organismos de la administración pública para el mejor desempeño de sus atribuciones. 7. Organizar su policía interior. 8. Acto Legislativo 1 de 2007, artículo 1°. El numeral 8 del artículo 135 de la Constitución Política de Colombia quedará así: Citar y requerir a los ministros, superintendentes y directores de departamentos administrativos para que concurran a las sesiones. Las citaciones deberán hacerse con una anticipación no menor de cinco días y formularse en cuestionario escrito. En caso de que los ministros, superintendentes o directores de departamentos administrativos no concurran, sin excusa aceptada por la respectiva Cámara, esta podrá proponer moción de censura. Los ministros, superintendentes o directores administrativos deberán ser oídos en la sesión para la cual fueron citados, sin perjuicio de que el debate continúe en las sesiones posteriores por decisión de la respectiva Cámara. El debate no podrá extenderse a asuntos ajenos al cuestionario y deberá encabezar el orden del día de la sesión. 9. Acto Legislativo 01 de 2007, artículo 2°. El numeral 9 del artículo 135 de la Constitución Política de Colombia quedará así: Proponer moción de censura respecto de los ministros, superintendentes y directores de departamentos administrativos por asuntos relacionados con funciones propias del cargo, o por desatención a los requerimientos y citaciones del Congreso de la República. La moción de censura, si hubiere lugar a ella, deberá proponerla por lo menos la décima parte de los miembros que componen la respectiva Cámara. La votación se hará entre el tercero y el décimo día siguientes a la terminación del debate, con audiencia pública del funcionario respectivo. Su aprobación requerirá el voto afirmativo de la mitad más uno de los integrantes de la Cámara que la haya propuesto. Una vez aprobada, el funcionario quedará separado de su cargo. Si fuere rechazada, no podrá presentarse otra sobre la misma materia a menos que la motiven hechos nuevos. La renuncia del funcionario respecto del cual se haya promovido moción de censura no obsta para que la misma sea aprobada conforme a lo previsto en este artículo. Pronunciada una Cámara sobre la moción de censura su decisión inhibe a la otra para pronunciarse sobre la misma.',
  },
  {
    id: 136,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 1,
    chapter: 'DE LA RAMA LEGISLATIVA',
    articleNumber: 136,
    content:
      'Se prohíbe al Congreso y a cada una de sus Cámaras: 1. Inmiscuirse, por medio de resoluciones o de leyes, en asuntos de competencia privativa de otras autoridades. 2. Exigir al Gobierno información sobre instrucciones en materia diplomática o sobre negociaciones de carácter reservado. 3. Dar votos de aplauso a los actos oficiales. 4. Decretar a favor de personas o entidades donaciones, gratificaciones, auxilios, indemnizaciones, pensiones u otras erogaciones que no estén destinadas a satisfacer créditos o derechos reconocidos con arreglo a la ley preexistente. 5. Decretar actos de proscripción o persecución contra personas naturales o jurídicas. 6. Autorizar viajes al exterior con dineros del erario, salvo en cumplimiento de misiones específicas, aprobadas al menos por las tres cuartas partes de los miembros de la respectiva Cámara.',
  },
  {
    id: 137,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 1,
    chapter: 'DE LA RAMA LEGISLATIVA',
    articleNumber: 137,
    content:
      'Cualquier comisión permanente podrá emplazar a toda persona natural o jurídica, para que en sesión especial rinda declaraciones orales o escritas, que podrán exigirse bajo juramento, sobre hechos relacionados directamente con las indagaciones que la comisión adelante. Si quienes hayan sido citados se excusaren de asistir y la comisión insistiere en llamarlos, la Corte Constitucional, después de oírlos, resolverá sobre el particular en un plazo de diez días, bajo estricta reserva. La renuencia de los citados a comparecer o a rendir las declaraciones requeridas, será sancionada por la comisión con la pena que señalen las normas vigentes para los casos de desacato a las autoridades. Si en el desarrollo de la investigación se requiere, para su perfeccionamiento, o para la persecución de posibles infractores penales, la intervención de otras autoridades, se las exhortará para lo pertinente.',
  },
  {
    id: 138,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 2,
    chapter: 'DE LA REUNIÓN Y EL FUNCIONAMIENTO',
    articleNumber: 138,
    content:
      'El Congreso, por derecho propio, se reunirá en sesiones ordinarias, durante dos períodos por año, que constituirán una sola legislatura. El primer período de sesiones comenzará el 20 de julio y terminará el 16 de diciembre; el segundo el 16 de marzo y concluirá el 20 de junio. Si por cualquier causa no pudiere reunirse en las fechas indicadas, lo hará tan pronto como fuere posible, dentro de los períodos respectivos. También se reunirá el Congreso en sesiones extraordinarias, por convocatoria del Gobierno y durante el tiempo que este señale. En el curso de ellas solo podrá ocuparse en los asuntos que el Gobierno someta a su consideración, sin perjuicio de la función de control político que le es propia, la cual podrá ejercer en todo tiempo.',
  },
  {
    id: 139,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 2,
    chapter: 'DE LA REUNIÓN Y EL FUNCIONAMIENTO',
    articleNumber: 139,
    content:
      'Las sesiones del Congreso serán instaladas y clausuradas conjunta y públicamente por el Presidente de la República, sin que esta ceremonia, en el primer evento, sea esencial para que el Congreso ejerza legítimamente sus funciones.',
  },
  {
    id: 140,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 2,
    chapter: 'DE LA REUNIÓN Y EL FUNCIONAMIENTO',
    articleNumber: 140,
    content:
      'El Congreso tiene su sede en la capital de la República. Las cámaras podrán por acuerdo entre ellas trasladar su sede a otro lugar y, en caso de perturbación del orden público, podrán reunirse en el sitio que designe el Presidente del Senado',
  },
  {
    id: 141,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 2,
    chapter: 'DE LA REUNIÓN Y EL FUNCIONAMIENTO',
    articleNumber: 141,
    content:
      'El Congreso se reunirá en un solo cuerpo únicamente para la instalación y clausura de sus sesiones, para dar posesión al Presidente de la República, para recibir a Jefes de Estado o de Gobierno de otros países, para elegir Contralor General de la República y Vicepresidente cuando sea menester reemplazar el electo por el pueblo, así como decidir sobre la moción de censura, con arreglo al artículo 135. En tales casos el Presidente del Senado y el de la Cámara serán respectivamente Presidente y Vicepresidente del Congreso.',
  },
  {
    id: 142,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 2,
    chapter: 'DE LA REUNIÓN Y EL FUNCIONAMIENTO',
    articleNumber: 142,
    content:
      'Cada Cámara elegirá, para el respectivo período constitucional, comisiones permanentes que tramitarán en primer debate los proyectos de acto legislativo o de ley. La ley determinará el número de comisiones permanentes y el de sus miembros, así como las materias de las que cada una deberá ocuparse. Cuando sesionen conjuntamente las Comisiones Constitucionales Permanentes, el quórum decisorio será el que se requiera para cada una de las comisiones individualmente consideradas.',
  },
  {
    id: 143,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 2,
    chapter: 'DE LA REUNIÓN Y EL FUNCIONAMIENTO',
    articleNumber: 143,
    content:
      'El Senado de la República y la Cámara de Representantes podrán disponer que cualquiera de las comisiones permanentes sesione durante el receso, con el fin de debatir los asuntos que hubieren quedado pendientes en el período anterior, de realizar los estudios que la corporación respectiva determine y de preparar los proyectos que las Cámaras les encarguen.',
  },
  {
    id: 144,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 2,
    chapter: 'DE LA REUNIÓN Y EL FUNCIONAMIENTO',
    articleNumber: 144,
    content:
      'Acto Legislativo 01 de 2009, artículo 7°. El artículo 144 de la Constitución Política quedará así: Las sesiones de las Cámaras y de sus Comisiones Permanentes serán públicas, con las limitaciones a que haya lugar conforme a su reglamento. El ejercicio del cabildeo será reglamentado mediante ley',
  },
  {
    id: 145,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 2,
    chapter: 'DE LA REUNIÓN Y EL FUNCIONAMIENTO',
    articleNumber: 145,
    content:
      'El Congreso pleno, las Cámaras y sus comisiones no podrán abrir sesiones ni deliberar con menos de una cuarta parte de sus miembros. Las decisiones solo podrán tomarse con la asistencia de la mayoría de los integrantes de la respectiva corporación, salvo que la Constitución determine un quórum diferente.',
  },
  {
    id: 151,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 151,
    content:
      'El Congreso expedirá leyes orgánicas a las cuales estará sujeto el ejercicio de la actividad legislativa. Por medio de ellas se establecerán los reglamentos del Congreso y de cada una de las Cámaras, las normas sobre preparación, aprobación y ejecución del presupuesto de rentas y ley de apropiaciones y del plan general de desarrollo, y las relativas a la asignación de competencias normativas a las entidades territoriales. Las leyes orgánicas requerirán, para su aprobación, la mayoría absoluta de los votos de los miembros de una y otra Cámara.',
  },
  {
    id: 152,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 152,
    content:
      'Mediante las leyes estatutarias, el Congreso de la República regulará las siguientes materias: a) Derechos y deberes fundamentales de las personas y los procedimientos y recursos para su protección; b) Administración de justicia; c) Organización y régimen de los partidos y movimientos políticos; estatuto de la oposición y funciones electorales; d) Instituciones y mecanismos de participación ciudadana; e) Estados de excepción. f) Acto Legislativo 02 de 2004, artículo 4°. Adiciónanse al artículo 152 de la Constitución un literal f) y un parágrafo transitorio, así: La igualdad electoral entre los candidatos a la Presidencia de la República que reúnan los requisitos que determine la ley. g) Acto Legislativo 02 de 2012, artículo 2°. Adiciónese al artículo 152 de la Constitución Política un literal g) así: Las materias expresamente señaladas en los artículos 116 y 221 de la Constitución, de conformidad con el presente acto legislativo. Parágrafo transitorio. El Gobierno nacional o los miembros del Congreso presentarán, antes del 1° de marzo de 2005, un Proyecto de Ley Estatutaria que desarrolle el literal f) del artículo 152 de la Constitución y regule además, entre otras, las siguientes materias: Garantías a la oposición, participación en política de servidores públicos, derecho al acceso equitativo a los medios de comunicación que hagan uso del espectro electromagnético, financiación preponderantemente estatal de las campañas presidenciales, derecho de réplica en condiciones de equidad cuando el Presidente de la República sea candidato y normas sobre inhabilidades para candidatos a la Presidencia de la República. El proyecto tendrá mensaje de urgencia y podrá ser objeto de mensaje de insistencia si fuere necesario. El Congreso de la República expedirá la Ley Estatutaria antes del 20 de junio de 2005. Se reducen a la mitad los términos para la revisión previa de exequibilidad del Proyecto de Ley Estatutaria, por parte de la Corte Constitucional.',
  },
  {
    id: 153,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 153,
    content:
      'La aprobación, modificación o derogación de las leyes estatutarias exigirá la mayoría absoluta de los miembros del Congreso y deberá efectuarse dentro de una sola legislatura. Dicho trámite comprenderá la revisión previa, por parte de la Corte Constitucional, de la exequibilidad del proyecto. Cualquier ciudadano podrá intervenir para defenderla o impugnarla.',
  },
  {
    id: 154,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 154,
    content:
      'Las leyes pueden tener origen en cualquiera de las Cámaras a propuesta de sus respectivos miembros, del Gobierno nacional, de las entidades señaladas en el artículo 156, o por iniciativa popular en los casos previstos en la Constitución. No obstante, solo podrán ser dictadas o reformadas por iniciativa del Gobierno las leyes a que se refieren los numerales 3, 7, 9, 11 y 22 y los literales a), b) y e), del numeral 19 del artículo 150; las que ordenen participaciones en las rentas nacionales o transferencias de las mismas; las que autoricen aportes o suscripciones del Estado a empresas industriales o comerciales y las que decreten exenciones de impuestos, contribuciones o tasas nacionales. Las Cámaras podrán introducir modificaciones a los proyectos presentados por el Gobierno. Los proyectos de ley relativos a los tributos iniciarán su trámite en la Cámara de Representantes y los que se refieran a relaciones internacionales, en el Senado.',
  },
  {
    id: 155,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 155,
    content:
      'Podrán presentar proyectos de ley o de reforma constitucional, un número de ciudadanos igual o superior al cinco por ciento del censo electoral existente en la fecha respectiva o el treinta por ciento de los concejales o diputados del país. La iniciativa popular será tramitada por el Congreso, de conformidad con lo establecido en el artículo 163, para los proyectos que hayan sido objeto de manifestación de urgencia. Los ciudadanos proponentes tendrán derecho a designar un vocero que será oído por las Cámaras en todas las etapas del trámite',
  },
  {
    id: 156,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 156,
    content:
      'La Corte Constitucional, Consejo de Gobierno Judicial*, la Corte Suprema de Justicia, el Consejo de Estado, el Consejo Nacional Electoral, el Procurador General de la Nación, el Contralor General de la República, tienen la facultad de presentar proyectos de ley en materias relacionadas con sus funciones. *Acto Legislativo 02 de 2015 Artículo 26. Concordancias, vigencias y derogatorias. Sustitúyase la expresión “Consejo Superior de la Judicatura” por la de “Comisión Nacional de Disciplina Judicial” en el artículo 116 de la Constitución Política.',
  },
  {
    id: 157,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 157,
    content:
      'Ningún proyecto será ley sin los requisitos siguientes: 1. Haber sido publicado oficialmente por el Congreso, antes de darle curso en la comisión respectiva. 2. Haber sido aprobado en primer debate en la correspondiente comisión permanente de cada Cámara. El reglamento del Congreso determinará los casos en los cuales el primer debate se surtirá en sesión conjunta de las comisiones permanentes de ambas Cámaras. 3. Haber sido aprobado en cada Cámara en segundo debate. 4. Haber obtenido la sanción del Gobierno.',
  },
  {
    id: 158,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 158,
    content:
      'Todo proyecto de ley debe referirse a una misma materia y serán inadmisibles las disposiciones o modificaciones que no se relacionen con ella. El Presidente de la respectiva comisión rechazará las iniciativas que no se avengan con este precepto, pero sus decisiones serán apelables ante la misma comisión. La ley que sea objeto de reforma parcial se publicará en un solo texto que incorpore las modificaciones aprobadas.',
  },
  {
    id: 159,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 159,
    content:
      'El proyecto de ley que hubiere sido negado en primer debate podrá ser considerado por la respectiva Cámara a solicitud de su autor, de un miembro de ella, del Gobierno o del vocero de los proponentes en los casos de iniciativa popular.',
  },
  {
    id: 160,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 160,
    content:
      'Entre el primero y el segundo debate deberá mediar un lapso no inferior a ocho días, y entre la aprobación del proyecto en una de las Cámaras y la iniciación del debate en la otra, deberán transcurrir por lo menos quince días. Durante el segundo debate cada Cámara podrá introducir al proyecto las modificaciones, adiciones y supresiones que juzgue necesarias. En el informe a la Cámara plena para segundo debate, el ponente deberá consignar la totalidad de las propuestas que fueron consideradas por la comisión y las razones que determinaron su rechazo. Todo Proyecto de Ley o de Acto Legislativo deberá tener informe de ponencia en la respectiva comisión encargada de tramitarlo, y deberá dársele el curso correspondiente. Acto Legislativo 01 de 2003, artículo 8°. El artículo 160 de la Constitución Política tendrá un inciso adicional del siguiente tenor: Ningún proyecto de ley será sometido a votación en sesión diferente a aquella que previamente se haya anunciado. El aviso de que un proyecto será sometido a votación lo dará la Presidencia de cada Cámara o Comisión en sesión distinta a aquella en la cual se realizará la votación.',
  },
  {
    id: 174,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 4,
    chapter: 'DEL SENADO DE LA REPÚBLICA',
    articleNumber: 174,
    content:
      'Acto Legislativo 02 de 2015, artículo 5°. El artículo 174 de la Constitución Política quedará así: Corresponde al Senado conocer de las acusaciones que formule la Cámara de Representantes contra el Presidente de la República o quien haga sus veces y contra los miembros de la Comisión de Aforados, aunque hubieren cesado en el ejercicio de sus cargos. En este caso, será competente para conocer los hechos u omisiones ocurridos en el desempeño de los mismos.',
  },
  {
    id: 161,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 161,
    content:
      'Acto Legislativo 01 de 2003, artículo 9°. El artículo 161 de la Constitución Política quedará así: Cuando surgieren discrepancias en las Cámaras respecto de un proyecto, ambas integrarán comisiones de conciliadores conformadas por un mismo número de Senadores y Representantes, quienes reunidos conjuntamente, procurarán conciliar los textos, y en caso de no ser posible, definirán por mayoría. Previa publicación por lo menos con un día de anticipación, el texto escogido se someterá a debate y aprobación de las respectivas plenarias. Si después de la repetición del segundo debate persiste la diferencia, se considera negado el proyecto',
  },
  {
    id: 162,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 162,
    content:
      'Los proyectos de ley que no hubieren completado su trámite en una legislatura y que hubieren recibido primer debate en alguna de las Cámaras, continuarán su curso en la siguiente, en el estado en que se encuentren. Ningún proyecto podrá ser considerado en más de dos legislaturas.',
  },
  {
    id: 163,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 163,
    content:
      'El Presidente de la República podrá solicitar trámite de urgencia para cualquier proyecto de ley. En tal caso, la respectiva Cámara deberá decidir sobre el mismo dentro del plazo de treinta días. Aun dentro de este lapso, la manifestación de urgencia puede repetirse en todas las etapas constitucionales del proyecto. Si el Presidente insistiere en la urgencia, el proyecto tendrá prelación en el orden del día excluyendo la consideración de cualquier otro asunto, hasta tanto la respectiva Cámara o comisión decida sobre él. Si el proyecto de ley a que se refiere el mensaje de urgencia se encuentra al estudio de una comisión permanente, esta, a solicitud del Gobierno, deliberará conjuntamente con la correspondiente de la otra Cámara para darle primer debate.',
  },
  {
    id: 164,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 164,
    content:
      'El Congreso dará prioridad al trámite de los proyectos de ley aprobatorios de los tratados sobre derechos humanos que sean sometidos a su consideración por el Gobierno.',
  },
  {
    id: 165,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 165,
    content:
      'Aprobado un proyecto de ley por ambas Cámaras, pasará al Gobierno para su sanción. Si este no lo objetare, dispondrá que se promulgue como ley; si lo objetare, lo devolverá a la Cámara en que tuvo origen.',
  },
  {
    id: 166,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 166,
    content:
      'El Gobierno dispone del término de seis días para devolver con objeciones cualquier proyecto cuando no conste de más de veinte artículos; de diez días, cuando el proyecto contenga de veintiuno a cincuenta artículos; y hasta de veinte días cuando los artículos sean más de cincuenta. Si transcurridos los indicados términos, el Gobierno no hubiere devuelto el proyecto con objeciones, el Presidente deberá sancionarlo y promulgarlo. Si las Cámaras entran en receso dentro de dichos términos, el Presidente tendrá el deber de publicar el proyecto sancionado u objetado dentro de aquellos plazos.',
  },
  {
    id: 167,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 167,
    content:
      'El proyecto de ley objetado total o parcialmente por el Gobierno volverá a las Cámaras a segundo debate. El Presidente sancionará sin poder presentar objeciones el proyecto que, reconsiderado, fuere aprobado por la mitad más uno de los miembros de una y otra Cámara. Exceptúase el caso en que el proyecto fuere objetado por inconstitucional. En tal evento, si las Cámaras insistieren, el proyecto pasará a la Corte Constitucional para que ella, dentro de los seis días siguientes decida sobre su exequibilidad. El fallo de la Corte obliga al Presidente a sancionar la ley. Si lo declara inexequible, se archivará el proyecto. Si la Corte considera que el proyecto es parcialmente inexequible, así lo indicará a la Cámara en que tuvo su origen para que, oído el Ministro del ramo, rehaga e integre las disposiciones afectadas en términos concordantes con el dictamen de la Corte. Una vez cumplido este trámite, remitirá a la Corte el proyecto para fallo definitivo.',
  },
  {
    id: 168,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 168,
    content:
      'Si el Presidente no cumpliere el deber de sancionar las leyes en los términos y según las condiciones que la Constitución establece, las sancionará y promulgará el Presidente del Congreso.',
  },
  {
    id: 169,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 169,
    content:
      'El título de las leyes deberá corresponder precisamente a su contenido, y a su texto precederá esta fórmula: “El Congreso de Colombia, DECRETA”',
  },
  {
    id: 170,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 3,
    chapter: 'DE LAS LEYES',
    articleNumber: 170,
    content:
      'Un número de ciudadanos equivalente a la décima parte del censo electoral, podrá solicitar ante la organización electoral la convocación de un referendo para la derogatoria de una ley. La ley quedará derogada si así lo determina la mitad más uno de los votantes que concurran al acto de consulta, siempre y cuando participe en este una cuarta parte de los ciudadanos que componen el censo electoral. No procede el referendo respecto de las leyes aprobatorias de tratados internacionales, ni de la Ley de Presupuesto, ni de las referentes a materias fiscales o tributarias.',
  },
  {
    id: 171,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 4,
    chapter: 'DEL SENADO DE LA REPÚBLICA',
    articleNumber: 171,
    content:
      'El Senado de la República estará integrado por cien miembros elegidos en circunscripción nacional. Habrá un número adicional de dos senadores elegidos en circunscripción nacional especial por comunidades indígenas. Los ciudadanos colombianos que se encuentren o residan en el exterior podrán sufragar en las elecciones para Senado de la República. La Circunscripción Especial para la elección de senadores por las comunidades indígenas se regirá por el sistema de cuociente electoral. Los representantes de las comunidades indígenas que aspiren a integrar el Senado de la República, deberán haber ejercido un cargo de autoridad tradicional en su respectiva comunidad o haber sido líder de una organización indígena, calidad que se acreditará mediante certificado de la respectiva organización, refrendado por el Ministro de Gobierno. Nota: Téngase en cuenta para la aplicación de este artículo lo indicado en el inciso 2° del art. 1° del Acto Legislativo 02 de 2015.',
  },
  {
    id: 172,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 4,
    chapter: 'DEL SENADO DE LA REPÚBLICA',
    articleNumber: 172,
    content:
      'Para ser elegido senador se requiere ser colombiano de nacimiento, ciudadano en ejercicio y tener más de treinta años de edad en la fecha de la elección.',
  },
  {
    id: 173,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 4,
    chapter: 'DEL SENADO DE LA REPÚBLICA',
    articleNumber: 173,
    content:
      'Son atribuciones del Senado: 1. Admitir o no las renuncias que hagan de sus empleos el Presidente de la República o el Vicepresidente. 2. Aprobar o improbar los ascensos militares que confiera el Gobierno, desde oficiales generales y oficiales de insignia de la fuerza pública, hasta el más alto grado. 3. Conceder licencia al Presidente de la República para separarse temporalmente del cargo, no siendo caso de enfermedad, y decidir sobre las excusas del Vicepresidente para ejercer la Presidencia de la República. 4. Permitir el tránsito de tropas extranjeras por el territorio de la República. 5. Autorizar al Gobierno para declarar la guerra a otra nación. 6. Elegir a los magistrados de la Corte Constitucional. 7. Elegir al Procurador General de la Nación.',
  },
  {
    id: 185,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 6,
    chapter: 'DE LOS CONGRESISTAS',
    articleNumber: 185,
    content:
      'Los congresistas serán inviolables por las opiniones y los votos que emitan en el ejercicio del cargo, sin perjuicio de las normas disciplinarias contenidas en el reglamento respectivo.',
  },
  {
    id: 175,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 4,
    chapter: 'DEL SENADO DE LA REPÚBLICA',
    articleNumber: 175,
    content:
      'En los juicios que se sigan ante el Senado, se observarán estas reglas: El acusado queda de hecho suspenso de su empleo, siempre que una acusación sea públicamente admitida. Si la acusación se refiere a delitos cometidos en ejercicio de funciones, o a indignidad por mala conducta, el Senado no podrá imponer otra pena que la de destitución del empleo, o la privación temporal o pérdida absoluta de los derechos políticos; pero al reo se le seguirá juicio criminal ante la Corte Suprema de Justicia, si los hechos lo constituyen responsable de infracción que merezca otra pena. 3. Si la acusación se refiere a delitos comunes, el Senado se limitará a declarar si hay o no lugar a seguimiento de causa y, en caso afirmativo, pondrá al acusado a disposición de la Corte Suprema. 4. El Senado podrá cometer la instrucción de los procesos a una diputación de su seno, reservándose el juicio y la sentencia definitiva, que será pronunciada en sesión pública, por los dos tercios, al menos, de los votos de los Senadores presentes.',
  },
  {
    id: 176,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 5,
    chapter: 'DE LA CÁMARA DE REPRESENTANTES',
    articleNumber: 176,
    content:
      'Acto Legislativo 1 de 2013, artículo 1°. El artículo 176 de la Constitución quedará así: La Cámara de Representantes se elegirá en circunscripciones territoriales y circunscripciones especiales. Acto Legislativo 02 de 2015. Artículo 6°. Modifíquense los incisos 2° y 4° del artículo 176 de la Constitución Política, los cuales quedarán así: Inciso 2° Cada departamento y el Distrito capital de Bogotá, conformarán una circunscripción territorial. Habrá dos representantes por cada circunscripción territorial y uno más por cada 365.000 habitantes o fracción mayor de 182.500 que tengan en exceso sobre los primeros 365.000. La circunscripción territorial conformada por el departamento de San Andrés, Providencia y Santa Catalina, elegirá adicionalmente un (1) Representante por la comunidad raizal de dicho departamento, de conformidad con la ley. Para la elección de Representantes a la Cámara, cada departamento y el Distrito Capital de Bogotá conformarán una circunscripción territorial. Acto Legislativo 02 de 2015. Artículo 6°. Modifíquense los incisos 2° y 4° del artículo 176 de la Constitución Política, los cuales quedarán así: Inciso 4° Las circunscripciones especiales asegurarán la participación en la Cámara de Representantes de los grupos étnicos y de los colombianos residentes en el exterior. Mediante estas circunscripciones se elegirán cuatro (4) Representantes, distribuidos así: dos (2) por la circunscripción de las comunidades afrodescendientes, uno (1) por la circunscripción de las comunidades indígenas, y uno (1) por la circunscripción internacional. En esta última, solo se contabilizarán los votos depositados fuera del territorio nacional por ciudadanos residentes en el exterior. Parágrafo 1°. A partir de 2014, la base para la asignación de las curules adicionales se ajustará en la misma proporción del crecimiento de la población nacional, de acuerdo con lo que determine el censo. Le corresponderá a la organización electoral ajustar la cifra para la asignación de curules. Parágrafo 2°. Si como resultado de la aplicación de la fórmula contenida en el presente artículo, una circunscripción territorial pierde una o más curules, mantendrá las mismas que le correspondían a 20 de julio de 2002. Parágrafo transitorio. El Congreso de la República reglamentará la circunscripción internacional a más tardar el 16 de diciembre de 2013; de lo contrario, lo hará el Gobierno nacional dentro de los treinta (30) días siguientes a esa fecha. En dicha reglamentación se incluirán, entre otros temas, la inscripción de candidatos, y la inscripción de ciudadanos habilitados para votar en el exterior, los mecanismos para promover la participación y realización del escrutinio de votos a través de los consulados y embajadas, y la financiación estatal para visitas al exterior por parte de los representantes elegidos.',
  },
  {
    id: 177,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 5,
    chapter: 'DE LA CÁMARA DE REPRESENTANTES',
    articleNumber: 177,
    content:
      'Para ser elegido representante se requiere ser ciudadano en ejercicio y tener más de veinticinco años de edad en la fecha de la elección.',
  },
  {
    id: 178,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 5,
    chapter: 'DE LA CÁMARA DE REPRESENTANTES',
    articleNumber: 178,
    content:
      'La Cámara de Representantes tendrá las siguientes atribuciones especiales: 1. Elegir al Defensor del Pueblo. 2. Examinar y fenecer la cuenta general del presupuesto y del tesoro que le presente el Contralor General de la República. 3. Acto Legislativo 02 de 2015, artículo 7°. El numeral tercero del artículo 178 de la Constitución Política quedará así: Acusar ante el Senado, previa solicitud de la *Comisión de Investigación y Acusación de la Cámara de Representantes, cuando hubiere causas constitucionales, al Presidente de la República o a quien haga sus veces y a los Miembros de la Comisión de Aforados. *Acto Legislativo 02 de 2015 Artículo 26. Concordancias, vigencias y derogatorias. La Comisión de Investigación y Acusación de la Cámara de Representantes mencionada en el artículo 178 de la Constitución Política, no será una de las comisiones permanentes previstas en el artículo 142 de la misma. 4. Conocer de las denuncias y quejas que ante ella se presenten por el Fiscal General de la Nación o por los particulares contra los expresados funcionarios y, si prestan mérito, fundar en ellas acusación ante el Senado. 5. Requerir el auxilio de otras autoridades para el desarrollo de las investigaciones que le competen, y comisionar para la práctica de pruebas cuando lo considere conveniente. Nota: Téngase en cuenta para la aplicación de este artículo lo indicado en el inciso 2° del art. 1° del Acto Legislativo 02 de 2015. Artículo 178-A. Acto Legislativo 02 de 2015, artículo 8°. Adiciónese a la Constitución Política el artículo 178-A. Los Magistrados de la Corte Constitucional, de la Corte Suprema de Justicia, del Consejo de Estado, de la Comisión Nacional de Disciplina Judicial y el Fiscal General de la Nación serán responsables por cualquier infracción a la ley disciplinaria o penal cometida en el ejercicio de sus funciones o con ocasión de estas. En todo caso, no podrá exigírseles en ningún tiempo responsabilidad por los votos y opiniones emitidos en sus providencias judiciales o consultivas, proferidas en ejercicio de su independencia funcional, sin perjuicio de la responsabilidad a la que haya lugar por favorecer indebidamente intereses propios o ajenos. Una Comisión de Aforados será competente para investigar y acusar, conforme a la ley y los principios del debido proceso, a los funcionarios señalados en el inciso anterior, aunque hubieren cesado en el ejercicio de sus cargos. En este caso, será competente para conocer de los hechos u omisiones ocurridos en el desempeño de los mismos. Si la investigación se refiere a faltas disciplinarias de indignidad por mala conducta, la Comisión de Aforados adelantará la investigación y cuando hubiere lugar, presentará la acusación ante la Cámara de Representantes. En ningún caso se podrán imponer otras penas que la de suspensión o destitución del empleo. La decisión de la Cámara de Representantes podrá ser apelada ante el Senado de la República. El Congreso en ningún caso practicará pruebas. Contra la decisión del Senado no procederá ningún recurso ni acción. Si la investigación se refiere a delitos, la Comisión de Aforados también presentará la acusación a la Corte Suprema de Justicia, para que allí se adelante el juzgamiento. En el caso de juicios contra magistrados de la Corte Suprema de Justicia, los conjueces serán designados por el Consejo de Estado. La Comisión contará con un plazo de sesenta días para presentar la acusación cuando se trate de falta disciplinaria de indignidad por mala conduc ta, y la Cámara de Representantes tendrá treinta días para decidir. En todo caso, la Comisión podrá continuar con la investigación de la causa criminal de haber lugar a ello y, de encontrar mérito para acusar, adelantará el trámite previsto en el inciso anterior, en el término que disponga la ley. La Comisión estará conformada por cinco miembros, elegidos por el Congreso en Pleno para periodos personales de ocho años, de listas enviadas por el Consejo de Gobierno Judicial y elaboradas mediante convocatoria pública adelantada por la Gerencia de la Rama Judicial en los términos que disponga la ley. Los miembros de la Comisión de Aforados deberán cumplir con las calidades exigidas para ser Magistrados de la Corte Suprema de Justicia y estarán sujetos al mismo régimen de inhabilidades e incompatibilidades. Las Salas Plenas de la Corte Constitucional, de la Corte Suprema de Justicia, del Consejo de Estado y de la Comisión Nacional de Disciplina Judicial, podrán solicitar a la Comisión de Aforados la suspensión de uno de sus miembros mientras se decide la acusación por faltas disciplinarias de indignidad por mala conducta. La ley establecerá el procedimiento para determinar la responsabilidad fiscal cuando los aforados señalados en este artículo ejerzan funciones administrativas. Parágrafo transitorio. Sin perjuicio de lo dispuesto en el numeral 3 del artículo 178, la Comisión de Investigación y Acusaciones de la Cámara de Representantes mantendrá, durante un año contado a partir de la entrada en vigencia del presente Acto Legislativo, la competencia para investigar los hechos ocurridos antes de la posesión de los magistrados de la Comisión de Aforados, que se le imputen a los aforados citados en este artículo y a los magistrados del Consejo Superior de la Judicatura. La Cámara de Representantes adoptará las decisiones administrativas necesarias para que en ese lapso, los representantes investigadores puedan: a) Dictar resolución inhibitoria en los casos que no ameriten apertura formal de investigación cuando aparezca que la conducta no ha existido, que es objetivamente atípica, que la acción penal no puede iniciarse o que está demostrada una causal de ausencia de responsabilidad. b) Remitir la investigación a la autoridad competente si se trata de hechos cometidos por fuera del ejercicio de sus funciones y el investigado hubiere cesado en el ejercicio de su cargo. c) Ordenar la apertura de investigación cuando se encuentren dados los supuestos legales que lo ameriten y remitirla a la Comisión de Aforados para que asuma el proceso. d) Presentar la acusación ante la Plenaria de la Cámara de Representantes en relación con investigaciones abiertas, cuando se encuentren dados los supuestos legales que lo ameriten. e) Remitir a la Comisión de Aforados todas las demás investigaciones, en el estado en que se encuentren, incluidas las adelantadas contra los magistrados del Consejo Superior de la Judicatura. Mientras la ley no adopte el procedimiento aplicable, la Comisión de Aforados se regirá por el régimen procesal utilizado en las investigaciones que adelanta la Comisión de Investigación y Acusación y las normas que lo sustituyan y lo modifiquen.',
  },
  {
    id: 179,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 6,
    chapter: 'DE LOS CONGRESISTAS',
    articleNumber: 179,
    content:
      'No podrán ser congresistas: 1. Quienes hayan sido condenados en cualquier época por sentencia judicial, a pena privativa de la libertad, excepto por delitos políticos o culposos. 2. Quienes hubieren ejercido, como empleados públicos, jurisdicción o autoridad política, civil, administrativa o militar, dentro de los doce meses anteriores a la fecha de la elección. 3. Quienes hayan intervenido en gestión de negocios ante entidades públicas, o en la celebración de contratos con ellas en interés propio, o en el de terceros, o hayan sido representantes legales de entidades que administren tributos o contribuciones parafiscales, dentro de los seis meses anteriores a la fecha de la elección. 4. Quienes hayan perdido la investidura de congresista. 5. Quienes tengan vínculos por matrimonio, o unión permanente, o de parentesco en tercer grado de consanguinidad, primero de afinidad, o único civil, con funcionarios que ejerzan autoridad civil o política. 6. Quienes estén vinculados entre sí por matrimonio, o unión permanente, o parentesco dentro del tercer grado de consanguinidad, segundo de afinidad, o primero civil, y se inscriban por el mismo partido, movimiento o grupo para elección de cargos, o de miembros de corporaciones públicas que deban realizarse en la misma fecha. 7. Quienes tengan doble nacionalidad, exceptuando los colombianos por nacimiento. 8. Nadie podrá ser elegido para más de una Corporación o cargo público, ni para una Corporación y un cargo, si los respectivos períodos coinciden en el tiempo, así sea parcialmente. Las inhabilidades previstas en los numerales 2, 3, 5 y 6 se refieren a situaciones que tengan lugar en la circunscripción en la cual deba efectuarse la respectiva elección. La ley reglamentará los demás casos de inhabilidades por parentesco, con las autoridades no contemplados en estas disposiciones. Para los fines de este artículo se considera que la circunscripción nacional coincide con cada una de las territoriales, excepto para la inhabilidad consignada en el numeral 5.',
  },
  {
    id: 180,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 6,
    chapter: 'DE LOS CONGRESISTAS',
    articleNumber: 180,
    content:
      'Los congresistas no podrán: 1. Desempeñar cargo o empleo público o privado. 2. Gestionar, en nombre propio o ajeno, asuntos ante las entidades públicas o ante las personas que administren tributos, ser apoderados ante las mismas, celebrar con ellas, por sí o por interpuesta persona, contrato alguno. La ley establecerá las excepciones a esta disposición. 3. Acto Legislativo 03 de 1993, artículo 2°. El artículo 261 de la Constitución Política, quedará así: Parágrafo 2°. El numeral 3 del artículo 180 de la Constitución, quedará así: Ser miembro de juntas o consejos directivos de entidades oficiales descentralizadas de cualquier nivel o de instituciones que administren tributos. Celebrar contratos o realizar gestiones con personas naturales o jurídicas de derecho privado que administren, manejen o inviertan fondos públicos o sean contratistas del Estado o reciban donaciones de este. Se exceptúa la adquisición de bienes o servicios que ofrecen a los ciudadanos en igualdad de condiciones. Parágrafo 1°. Se exceptúa del régimen de incompatibilidades el ejercicio de la cátedra universitaria. Parágrafo 2°. El funcionario que en contravención del presente artículo, nombre a un Congresista para un empleo o cargo o celebre con él un contrato o acepte que actúe como gestor en nombre propio o de terceros, incurrirá en causal de mala conducta.',
  },
  {
    id: 181,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 6,
    chapter: 'DE LOS CONGRESISTAS',
    articleNumber: 181,
    content:
      'Las incompatibilidades de los congresistas tendrán vigencia durante el período constitucional respectivo. En caso de renuncia, se mantendrán durante el año siguiente a su aceptación, si el lapso que faltare para el vencimiento del período fuere superior. Quien fuere llamado a ocupar el cargo, quedará sometido al mismo régimen de inhabilidades e incompatibilidades a partir de su posesión.',
  },
  {
    id: 182,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 6,
    chapter: 'DE LOS CONGRESISTAS',
    articleNumber: 182,
    content:
      'Los congresistas deberán poner en conocimiento de la respectiva Cámara las situaciones de carácter moral o económico que los inhiban para participar en el trámite de los asuntos sometidos a su consideración. La ley determinará lo relacionado con los conflictos de intereses y las recusaciones.',
  },
  {
    id: 183,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 6,
    chapter: 'DE LOS CONGRESISTAS',
    articleNumber: 183,
    content:
      'Los congresistas perderán su investidura: 1. Por violación del régimen de inhabilidades e incompatibilidades, o del régimen de conflicto de intereses. 2. Por la inasistencia, en un mismo período de sesiones, a seis reuniones plenarias en las que se voten proyectos de acto legislativo, de ley o mociones de censura. 3. Por no tomar posesión del cargo dentro de los ocho días siguientes a la fecha de instalación de las Cámaras, o a la fecha en que fueren llamados a posesionarse. 4. Por indebida destinación de dineros públicos. 5. Por tráfico de influencias debidamente comprobado. Las causales 2 y 3 no tendrán aplicación cuando medie fuerza mayor.',
  },
  {
    id: 184,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 6,
    chapter: 'DE LOS CONGRESISTAS',
    articleNumber: 184,
    content:
      'La pérdida de la investidura será decretada por el Consejo de Estado de acuerdo con la ley y en un término no mayor de veinte días hábiles, contados a partir de la fecha de la solicitud formulada por la mesa directiva de la cámara correspondiente o por cualquier ciudadano.',
  },
  {
    id: 186,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 6,
    chapter: 'DE LOS CONGRESISTAS',
    articleNumber: 186,
    content:
      'De los delitos que cometan los congresistas, conocerá en forma privativa la Corte Suprema de Justicia, única autoridad que podrá ordenar su detención. En caso de flagrante delito deberán ser aprehendidos y puestos inmediatamente a disposición de la misma corporación.',
  },
  {
    id: 187,
    titleNumber: 6,
    title: 'DE LA RAMA LEGISLATIVA',
    chapterNumber: 6,
    chapter: 'DE LOS CONGRESISTAS',
    articleNumber: 187,
    content:
      'La asignación de los miembros del Congreso se reajustará cada año en proporción igual al promedio ponderado de los cambios ocurridos en la remuneración de los servidores de la administración central, según certificación que para el efecto expida el Contralor General de la República.',
  },
  {
    id: 188,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 1,
    chapter: 'DEL PRESIDENTE DE LA REPÚBLICA',
    articleNumber: 188,
    content:
      'El Presidente de la República simboliza la unidad nacional y al jurar el cumplimiento de la Constitución y de las leyes, se obliga a garantizar los derechos y libertades de todos los colombianos.',
  },
  {
    id: 189,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 1,
    chapter: 'DEL PRESIDENTE DE LA REPÚBLICA',
    articleNumber: 189,
    content:
      'Corresponde al Presidente de la República como Jefe de Estado, Jefe del Gobierno y Suprema Autoridad Administrativa: 1. Nombrar y separar libremente a los Ministros del Despacho y a los Directores de Departamentos Administrativos. 2. Dirigir las relaciones internacionales. Nombrar a los agentes diplomáticos y consulares, recibir a los agentes respectivos y celebrar con otros Estados y entidades de derecho internacional tratados o convenios que se someterán a la aprobación del Congreso. 3. Dirigir la fuerza pública y disponer de ella como Comandante Supremo de las Fuerzas Armadas de la República. 4. Conservar en todo el territorio el orden público y restablecerlo donde fuere turbado. 5. Dirigir las operaciones de guerra cuando lo estime conveniente. 6. Proveer a la seguridad exterior de la República, defendiendo la independencia y la honra de la nación y la inviolabilidad del territorio; declarar la guerra con permiso del Senado, o hacerla sin tal autorización para repeler una agresión extranjera; y convenir y ratificar los tratados de paz, de todo lo cual dará cuenta inmediata al Congreso. 7. Permitir, en receso del Senado, previo dictamen del Consejo de Estado, el tránsito de tropas extranjeras por el territorio de la República. 8. Instalar y clausurar las sesiones del Congreso en cada legislatura. 9. Sancionar las leyes. 10. Promulgar las leyes, obedecerlas y velar por su estricto cumplimiento. 11. Ejercer la potestad reglamentaria, mediante la expedición de los decretos, resoluciones y órdenes necesarios para la cumplida ejecución de las leyes. 12. Presentar un informe al Congreso, al iniciarse cada legislatura, sobre los actos de la Administración, sobre la ejecución de los planes y programas de desarrollo económico y social, y sobre los proyectos que el Gobierno se proponga adelantar durante la vigencia de la nueva legislatura. 13. Nombrar a los presidentes, directores o gerentes de los establecimientos públicos nacionales y a las personas que deban desempeñar empleos nacionales cuya provisión no sea por concurso o no corresponda a otros funcionarios o corporaciones, según la Constitución o la ley. En todo caso, el Gobierno tiene la facultad de nombrar y remover libremente a sus agentes. 14. Crear, fusionar o suprimir, conforme a la ley, los empleos que demande la administración central, señalar sus funciones especiales y fijar sus dotaciones y emolumentos. El Gobierno no podrá crear, con cargo al tesoro, obligaciones que excedan el monto global fijado para el respectivo servicio en la ley de apropiaciones iniciales. 15. Suprimir o fusionar entidades u organismos administrativos nacionales de conformidad con la ley. 16. Modificar la estructura de los Ministerios, Departamentos Administrativos y demás entidades u organismos administrativos nacionales, con sujeción a los principios y reglas generales que defina la ley. 17. Distribuir los negocios según su naturaleza, entre Ministerios, Departamentos Administrativos y Establecimientos Públicos. 18. Conceder permiso a los empleados públicos nacionales que lo soliciten, para aceptar, con carácter temporal, cargos o mercedes de gobiernos extranjeros. 19. Conferir grados a los miembros de la fuerza pública y someter para aprobación del Senado los que correspondan de acuerdo con el artículo 173. 20. Velar por la estricta recaudación y administración de las rentas y caudales públicos y decretar su inversión de acuerdo con las leyes. 21. Ejercer la inspección y vigilancia de la enseñanza conforme a la ley. 22. Ejercer la inspección y vigilancia de la prestación de los servicios públicos. 23. Celebrar los contratos que le correspondan con sujeción a la Constitución y la ley. 24. Ejercer, de acuerdo con la ley, la inspección, vigilancia y control sobre las personas que realicen actividades financiera, bursátil, aseguradora y cualquier otra relacionada con el manejo, aprovechamiento o inversión de recursos captados del público. Asimismo, sobre las entidades cooperativas y las sociedades mercantiles. 25. Organizar el Crédito Público; reconocer la deuda nacional y arreglar su servicio; modificar los aranceles, tarifas y demás disposiciones concernientes al régimen de aduanas; regular el comercio exterior; y ejercer la intervención en las actividades financiera, bursátil, aseguradora y cualquier otra relacionada con el manejo, aprovechamiento e inversión de recursos provenientes del ahorro de terceros de acuerdo con la ley. 26. Ejercer la inspección y vigilancia sobre instituciones de utilidad común para que sus rentas se conserven y sean debidamente aplicadas y para que en todo lo esencial se cumpla con la voluntad de los fundadores. 27. Conceder patente de privilegio temporal a los autores de invenciones o perfeccionamientos útiles, con arreglo a la ley. 28. Expedir cartas de naturalización, conforme a la ley.',
  },
  {
    id: 190,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 1,
    chapter: 'DEL PRESIDENTE DE LA REPÚBLICA',
    articleNumber: 190,
    content:
      'El Presidente de la República será elegido para un período de cuatro años, por la mitad más uno de los votos que, de manera secreta y directa, depositen los ciudadanos en la fecha y con las formalidades que determine la ley. Si ningún candidato obtiene dicha mayoría, se celebrará una nueva votación que tendrá lugar tres semanas más tarde, en la que solo participarán los dos candidatos que hubieren obtenido las más altas votaciones. Será declarado Presidente quien obtenga el mayor número de votos. En caso de muerte o incapacidad física permanente de alguno de los dos candidatos con mayoría de votos, su partido o movimiento político podrá inscribir un nuevo candidato para la segunda vuelta. Si no lo hace o si la falta obedece a otra causa, lo reempla-zará quien hubiese obtenido la tercera votación; y así en forma sucesiva y en orden descendente. Si la falta se produjese con antelación menor a dos semanas de la segunda vuelta, esta se aplazará por quince días.',
  },
  {
    id: 191,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 1,
    chapter: 'DEL PRESIDENTE DE LA REPÚBLICA',
    articleNumber: 191,
    content:
      'Para ser Presidente de la República se requiere ser colombiano por nacimiento, ciudadano en ejercicio y mayor de treinta años.',
  },
  {
    id: 192,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 1,
    chapter: 'DEL PRESIDENTE DE LA REPÚBLICA',
    articleNumber: 192,
    content:
      'El Presidente de la República tomará posesión de su destino ante el Congreso, y prestará juramento en estos términos: “Juro a Dios y prometo al pueblo cumplir fielmente la Constitución y las leyes de Colombia”. Si por cualquier motivo el Presidente de la República no pudiere tomar posesión ante el Congreso, lo hará ante la Corte Suprema de Justicia o, en defecto de esta, ante dos testigos.',
  },
  {
    id: 193,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 1,
    chapter: 'DEL PRESIDENTE DE LA REPÚBLICA',
    articleNumber: 193,
    content:
      'Corresponde al Senado conceder licencia al Presidente de la República para separarse temporalmente del cargo. Por motivo de enfermedad, el Presidente de la República puede dejar de ejercer el cargo, por el tiempo necesario, mediante aviso al Senado o, en receso de este, a la Corte Suprema de Justicia.',
  },
  {
    id: 194,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 1,
    chapter: 'DEL PRESIDENTE DE LA REPÚBLICA',
    articleNumber: 194,
    content:
      'Son faltas absolutas del Presidente de la República su muerte, su renuncia aceptada, la destitución decretada por sentencia, la incapacidad física permanente y el abandono del cargo, declarados estos dos últimos por el Senado. Son faltas temporales la licencia y la enfermedad, de conformidad con el artículo precedente y la suspensión en el ejercicio del cargo decretada por el Senado, previa admisión pública de la acusación en el caso previsto en el numeral primero del artículo 175.',
  },
  {
    id: 195,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 1,
    chapter: 'DEL PRESIDENTE DE LA REPÚBLICA',
    articleNumber: 195,
    content:
      'El encargado del Ejecutivo tendrá la misma preeminencia y las mismas atribuciones que el Presidente, cuyas veces hace.',
  },
  {
    id: 196,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 1,
    chapter: 'DEL PRESIDENTE DE LA REPÚBLICA',
    articleNumber: 196,
    content:
      'El Presidente de la República, o quien haga sus veces, no podrá trasladarse a territorio extranjero durante el ejercicio de su cargo, sin previo aviso al Senado o, en receso de este, a la Corte Suprema de Justicia. La infracción de esta disposición implica abandono del cargo. El Presidente de la República, o quien haya ocupado la Presidencia a título de encargado, no podrá salir del país dentro del año siguiente a la fecha en que cesó en el ejercicio de sus funciones, sin permiso previo del Senado. Cuando el Presidente de la República se traslade a territorio extranjero en ejercicio de su cargo, el Ministro a quien corresponda, según el orden de precedencia legal, ejercerá bajo su propia responsabilidad las funciones constitucionales que el Presidente le delegue, tanto aquellas que le son propias como las que ejerce en su calidad de Jefe del Gobierno. El Ministro Delegatario pertenecerá al mismo partido o movimiento político del Presidente.',
  },
  {
    id: 197,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 1,
    chapter: 'DEL PRESIDENTE DE LA REPÚBLICA',
    articleNumber: 197,
    content:
      'Acto Legislativo 02 de 2015, artículo 9°. El artículo 197 de la Constitución Política quedará así: Artículo 197. No podrá ser elegido Presidente de la República el ciudadano que a cualquier título hubiere ejercido la Presidencia. Esta prohibición no cobija al Vicepresidente cuando la ha ejercido por menos de tres meses, en forma continua o discontinua, durante el cuatrienio. La prohibición de la reelección solo podrá ser reformada o derogada mediante referendo de iniciativa popular o asamblea constituyente. No podrá ser elegido Presidente de la República o Vicepresidente quien hubiere incurrido en alguna de las causales de inhabilidad consagradas en los numerales 1, 4 y 7 del artículo 179, ni el ciudadano que un año antes de la elección haya tenido la investidura de Vicepresidente o ejercido cualquiera de los siguientes cargos: Ministro, Director de Departamento Administrativo, Magistrado de la Corte Suprema de Justicia, de la Corte Constitucional, del Consejo de Estado, Comisión Nacional de Disciplina Judicial, Miembro de la Comisión de Aforados o del Consejo Nacional Electoral, Procurador General de la Nación, Defensor del Pueblo, Contralor General de la República, Fiscal General de la Nación, Registrador Nacional del Estado Civil, Comandantes de las Fuerzas Militares, Auditor General de la República, Director General de la Policía, Gobernador de departamento o Alcalde.',
  },
  {
    id: 198,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 1,
    chapter: 'DEL PRESIDENTE DE LA REPÚBLICA',
    articleNumber: 198,
    content:
      'El Presidente de la República, o quien haga sus veces, será responsable de sus actos u omisiones que violen la Constitución o las leyes',
  },
  {
    id: 199,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 1,
    chapter: 'DEL PRESIDENTE DE LA REPÚBLICA',
    articleNumber: 199,
    content:
      'El Presidente de la República, durante el período para el que sea elegido, o quien se halle encargado de la Presidencia, no podrá ser perseguido ni juzgado por delitos, sino en virtud de acusación de la Cámara de Representantes y cuando el Senado haya declarado que hay lugar a formación de causa.',
  },
  {
    id: 200,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 2,
    chapter: 'DEL GOBIERNO',
    articleNumber: 200,
    content:
      'Corresponde al Gobierno, en relación con el Congreso: 1. Concurrir a la formación de las leyes, presentando proyectos por intermedio de los ministros, ejerciendo el derecho de objetarlos y cumpliendo el deber de sancionarlos con arreglo a la Constitución. 2. Convocarlo a sesiones extraordinarias. 3. Presentar el plan nacional de desarrollo y de inversiones públicas, conforme a lo dispuesto en el artículo 150. 4. Enviar a la Cámara de Representantes el proyecto de presupuesto de rentas y gastos. 5. Rendir a las Cámaras los informes que estas soliciten sobre negocios que no demanden reserva. 6. Prestar eficaz apoyo a las Cámaras cuando ellas lo soliciten, poniendo a su disposición la fuerza pública, si fuere necesario.',
  },
  {
    id: 201,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 2,
    chapter: 'DEL GOBIERNO',
    articleNumber: 201,
    content:
      'Corresponde al Gobierno, en relación con la Rama Judicial: 1. Prestar a los funcionarios judiciales, con arreglo a las leyes, los auxilios necesarios para hacer efectivas sus providencias. 2. Conceder indultos por delitos políticos, con arreglo a la ley, e informar al Congreso sobre el ejercicio de esta facultad. En ningún caso estos indultos podrán comprender la responsabilidad que tengan los favorecidos respecto de los particulares.',
  },
  {
    id: 202,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 3,
    chapter: 'DEL VICEPRESIDENTE',
    articleNumber: 202,
    content:
      'El Vicepresidente de la República será elegido por votación popular el mismo día y en la misma fórmula con el Presidente de la República. Los candidatos para la segunda votación, si la hubiere, deberán ser en cada fórmula quienes la integraron en la primera. El Vicepresidente tendrá el mismo período del Presidente y lo reemplazará en sus faltas temporales o absolutas, aun en el caso de que estas se presenten antes de su posesión. En las faltas temporales del Presidente de la República bastará con que el Vicepresidente tome posesión del cargo en la primera oportunidad, para que pueda ejercerlo cuantas veces fuere necesario. En caso de falta absoluta del Presidente de la República, el Vicepresidente asumirá el cargo hasta el final del período. El Presidente de la República podrá confiar al Vicepresidente misiones o encargos especiales y designarlo en cualquier cargo de la Rama Ejecutiva. El Vicepresidente no podrá asumir funciones de Ministro Delegatario.',
  },
  {
    id: 203,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 3,
    chapter: 'DEL VICEPRESIDENTE',
    articleNumber: 203,
    content:
      'A falta del Vicepresidente cuando estuviera ejerciendo la Presidencia, esta será asumida por un Ministro en el orden que establezca la ley. La persona que de conformidad con este artículo reemplace al Presidente, pertenecerá a su mismo partido o movimiento y ejercerá la Presidencia hasta cuando el Congreso, por derecho propio, dentro de los treinta días siguientes a la fecha en que se produzca la vacancia presidencial, elija al Vicepresidente, quien tomará posesión de la Presidencia de la República.',
  },
  {
    id: 204,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 3,
    chapter: 'DEL VICEPRESIDENTE',
    articleNumber: 204,
    content:
      'Acto Legislativo 02 de 2004, artículo 3°. El artículo 204 de la Constitución Política quedará así: Para ser elegido Vicepresidente se requieren las mismas calidades que para ser Presidente de la República. Acto Legislativo 02 de 2015, artículo 10. Elimínense los incisos 2° y 3° del artículo 204 de la Constitución Política.',
  },
  {
    id: 205,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 3,
    chapter: 'DEL VICEPRESIDENTE',
    articleNumber: 205,
    content:
      'En caso de falta absoluta del Vicepresidente, el Congreso se reunirá por derecho propio, o por convocatoria del Presidente de la República, a fin de elegir a quien haya de remplazarlo para el resto del período. Son faltas absolutas del Vicepresidente: su muerte, su renuncia aceptada y la incapacidad física permanente reconocida por el Congreso.',
  },
  {
    id: 206,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 4,
    chapter:
      'DE LOS MINISTROS Y DIRECTORES DE LOS DEPARTAMENTOS ADMINISTRATIVOS',
    articleNumber: 206,
    content:
      'El número, denominación y orden de precedencia de los ministerios y departamentos administrativos serán determinados por la ley.',
  },
  {
    id: 207,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 4,
    chapter:
      'DE LOS MINISTROS Y DIRECTORES DE LOS DEPARTAMENTOS ADMINISTRATIVOS',
    articleNumber: 207,
    content:
      'Para ser ministro o director de departamento administrativo se requieren las mismas calidades que para ser representante a la Cámara.',
  },
  {
    id: 208,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 4,
    chapter:
      'DE LOS MINISTROS Y DIRECTORES DE LOS DEPARTAMENTOS ADMINISTRATIVOS',
    articleNumber: 208,
    content:
      'Los ministros y los directores de departamentos administrativos son los jefes de la administración en su respectiva dependencia. Bajo la dirección del Presidente de la República, les corresponde formular las políticas atinentes a su despacho, dirigir la actividad administrativa y ejecutar la ley. Los ministros, en relación con el Congreso, son voceros del Gobierno, presentan a las Cámaras proyectos de ley, atienden las citaciones que aquellas les hagan y toman parte en los debates directamente o por conducto de los viceministros. Los ministros y los directores de departamentos administrativos presentarán al Congreso, dentro de los primeros quince días de cada legislatura, informe sobre el estado de los negocios adscritos a su ministerio o departamento administrativo, y sobre las reformas que consideren convenientes. Las Cámaras pueden requerir la asistencia de los ministros. Las comisiones permanentes, además, la de los viceministros, los directores de departamentos administrativos, el Gerente del Banco de la República, los presidentes, directores o gerentes de las entidades descentralizadas del orden nacional y la de otros funcionarios de la Rama Ejecutiva del poder público.',
  },
  {
    id: 209,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 5,
    chapter: 'DE LA FUNCIÓN ADMINISTRATIVA',
    articleNumber: 209,
    content:
      'La función administrativa está al servicio de los intereses generales y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad, mediante la descentralización, la delegación y la desconcentración de funciones. Las autoridades administrativas deben coordinar sus actuaciones para el adecuado cumplimiento de los fines del Estado. La administración pública, en todos sus órdenes, tendrá un control interno que se ejercerá en los términos que señale la ley.',
  },
  {
    id: 210,
    titleNumber: 7,
    title: 'DE LA RAMA EJECUTIVA',
    chapterNumber: 5,
    chapter: 'DE LA FUNCIÓN ADMINISTRATIVA',
    articleNumber: 210,
    content:
      'Las entidades del orden nacional descentralizadas por servicios solo pueden ser creadas por ley o por autorización de esta, con fundamento en los principios que orientan la actividad administrativa. Los particulares pueden cumplir funciones administrativas en las condiciones que señale la ley. La ley establecerá el régimen jurídico de las entidades descentralizadas y la responsabilidad de sus presidentes, directores o gerentes',
  },
];