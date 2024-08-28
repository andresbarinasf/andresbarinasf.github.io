const publications = [
    {
        "id": 1,
        "type": "publication",
        "title": "Why should my group trust yours? Collective trust and trustworthiness under Economic Shocks",
        "link": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4913116",
        "authors": "<i>Barinas-Forero, A.</i> (2024)",
        "journal": "<b>Document CEDE</b>, 29, 1-81",
        "short_abstract": "We analyze the effects of conflict-related violence on the mental health of caregivers and young children, as well as the role of caregivers' mental health in explaining the toll of conflict on early childhood mental health",
        "abstract": "We analyze the effects of conflict-related violence on the mental health of caregivers and young children, as well as the role of caregivers' mental health in explaining the toll of conflict on early childhood mental health. Although an upcoming body of work has demonstrated the link between caregivers' and children's mental health, the role of caregivers' psychological constraints has been largely ignored in research and programming in conflict-affected settings. We demonstrate how these constraints play a role in the intergenerational transmission of mental health problems and emphasize the urgency of addressing caregivers' mental health within early childhood development programs in conflict-affected settings."
    },
    {
        "id": 2,
        "title": "The relationship between multidimensional poverty, income poverty and youth depressive symptoms: cross-sectional evidence from Mexico, South Africa and Colombia",
        "type": "publication",
        "link": "https://gh.bmj.com/content/7/1/e006960",
        "authors": "Zimmerman A, Lund C, Araya R, Hessel P, <i>Sánchez J</i>, Garman E, Evans-Lacko S, Díaz Y, Avendano-Pabon M. (2022)",
        "journal": "<b>BMJ Global Health</b> 2022;7:e006960.",
        "short_abstract": "The relationship between multidimensional poverty, income poverty and youth depressive symptoms: cross-sectional evidence from Mexico, South Africa, and Colombia.",
        "abstract": "This paper explores the relationship between multidimensional poverty, income poverty, and youth depressive symptoms using cross-sectional evidence from Mexico, South Africa, and Colombia. It investigates how various dimensions of poverty in these countries are associated with depressive symptoms among young people. The findings suggest that addressing multidimensional poverty is crucial for improving youth mental health in low- and middle-income countries."
    },
    {
        "id": 3,
        "title": "Family play, reading, and other stimulation and early childhood development in five low-and-middle-income countries",
        "type": "publication",
        "link": "https://doi.org/10.1111/desc.13404",
        "authors": "Cuartas, J., McCoy, D., <i>Sánchez, J.</i>, Behrman, J., Cappa, C., Donati, G., Heymann, J., Lu, C., Raikes, A., Rao, N., Richter, L., Stein, A., & Yoshikawa, H. (2023)",
        "journal": "<b>Developmental Science</b>, 00, e13404",
        "short_abstract": "Family play, reading, and other stimulation and early childhood development in five low-and-middle-income countries.",
        "abstract": "This research investigates the impact of family play, reading, and other forms of stimulation on early childhood development in five low- and middle-income countries. It emphasizes the significance of these activities in promoting early childhood development and highlights their role in enhancing cognitive and socio-emotional outcomes in children."
    },
    {
        "id": 4,
        "type": "publication",
        "authors": "<i>Sánchez-Ariza J</i>, Moya A, Cuartas J. (2022)",
        "link": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4230362",
        "journal": "<b>Documento CEDE</b>, #34",
        "title": "Conflict, Parenting, and Early Childhood Mental Health in Conflict-affected Settings: Evidence from Colombia.",
        "short_abstract": "We examine the effect of the exposure (or reduction in the exposure) to conflictrelated violence on parental mental health, caregivers' parenting stress and responsive caregiving, and early childhood mental health. We use data collected from the impact evaluation of a psychosocial group intervention in Tumaco, Colombia, a community chronically affected by the armed conflict. ",
        "abstract": "We examine the effect of the exposure (or reduction in the exposure) to conflictrelated violence on parental mental health, caregivers' parenting stress and responsive caregiving, and early childhood mental health. We use data collected from the impact evaluation of a psychosocial group intervention in Tumaco, Colombia, a community chronically affected by the armed conflict. Using an Instrumental Variables approach, we use the program's randomization into cohorts and staggered design of the data collection to exploit a natural experiment in which the armed groups in the municipality agreed to a Truce and municipal violence rates dropped between data collections. We find that the exposure to recent conflict-related violence had negative effects across the four main dimensions: increased parental mental health problems in 0.68 sd (SE=0.342 ; q-value=0.074), increased parenting stress in 0.76 sd (SE=0.389 ; q-value=0.074), reduced responsive caregiving in -1.023 sd (SE=0.434 ; q-value=0.074) and increased child mental health problems in 0.556 sd (SE=0.343 ; q-value=0.074). By providing causal evidence on the direct effect of conflict-related violence on parenting outcomes, we conduct an exploratory mediation analysis to assess whether parental mental health, parenting stress and responsive caregiving behaviors may partially account for the association between violence and child mental health. Yet, correlational links between violence and parental mental health and parenting behavior outcomes as mediators suggest important associations for understanding children's mental health vulnerability in conflict settings. "
    },
    {
        "id": 5,
        "type": "work_in_progress",
        "title": "Maternal Mental Health and Early Childhood Development in Conflict-Affected Settings",
        "authors": "Moya, A., Harker, A., Lieberman, A., Niño, B., <i>Sánchez-Ariza J</i>, Torres, M., and Reyes, V."
    },
    {
        "id": 6,
        "type": "work_in_progress",
        "title": "The long-term effects of cash transfer programmes on young adults mental health: A quasi-experimental study of Colombia, Mexico and South Africa.",
        "authors": "Zimmerman A, Lund C, Araya R, Evans-Lacko S, Díaz Y, <i>Sánchez Ariza J</i>, Hessel P, Garman E, Avendano M."
    },
    {
        "id": 7,
        "type": "work_in_progress",
        "authors": "Hessel P, Cuartas J, and <i>Sánchez J</i>.",
        "title": "Assessing Absolute and Relative Inequalities in Early Childhood Development in 73 Low- and Middle-Income Countries."
    },
    {
        "id": 8,
        "type": "work_in_progress",
        "authors": "Behrman J, McCoy D, Cuartas J, and <i>Sánchez J</i>.",
        "title": "Measuring Stimulation in Early Development. Are available instruments reliable?"
    }
]


function setButton(xd){
    if(xd=="Pub"){
        document.getElementById("pPub").classList.add("active");
        document.getElementById("divPub").classList.add("active");
        document.getElementById("pAll").classList.remove("active");
        document.getElementById("divAll").classList.remove("active");
        document.getElementById("pWork").classList.remove("active");
        document.getElementById("divWork").classList.remove("active");

    }
    if(xd=="All"){
        document.getElementById("pPub").classList.remove("active");
        document.getElementById("divPub").classList.remove("active");
        document.getElementById("pAll").classList.add("active");
        document.getElementById("divAll").classList.add("active");
        document.getElementById("pWork").classList.remove("active");
        document.getElementById("divWork").classList.remove("active");
    }
    if(xd=="Work"){
        document.getElementById("pPub").classList.remove("active");
        document.getElementById("divPub").classList.remove("active");
        document.getElementById("pAll").classList.remove("active");
        document.getElementById("divAll").classList.remove("active");
        document.getElementById("pWork").classList.add("active");
        document.getElementById("divWork").classList.add("active");
    }
}


function loadDocuments(type = "all") {
    if (type != "all")
        var result = publications.filter((publication) => publication.type == type);
    else
        var result = publications

    var toAdd = ""
    var id = 0    

    result.forEach((element) => {
        id += 1
        if (element.type == "publication") {
            toAdd += '<div class="mdl-cell mdl-cell--12-col" style="display: flex; align-items: center; border-bottom: 1px solid;">'
            toAdd +=    '<div class="mdl-cell mdl-cell--11-col" style="flex: 1"><a class="link_paper" href="'+element.link+'">'
            toAdd +=        '<h5>'+element.title+'</h5></a>'
            toAdd +=        '<p>'+element.authors+'<br>'+element.journal+'</p>'
            toAdd +=        '<p id="'+element.id+'absShort">'+element.short_abstract+'... <i onclick="$(\'#'+element.id+'absShort\').toggle(); $(\'#'+element.id+'abs\').toggle();" class="rm">Read more</i></p>'
            toAdd +=        '<p id="'+element.id+'abs" style="display: none">'+element.abstract+'</p>'
            toAdd +=    '</div>'
            toAdd +=  '<a href="'+element.link+'"><div style="width: 60px; padding: 15px;"><span class="material-symbols-outlined" style="font-size: 30px;">link</span></div></a></div>'
        }
        else{
            toAdd += '<div class="mdl-cell mdl-cell--12-col" style="display: flex; align-items: center; border-bottom: 1px solid;">'
            toAdd +=    '<div class="mdl-cell mdl-cell--11-col" style="flex: 1">'
            toAdd +=        '<h5>'+element.title+'</h5></a>'
            toAdd +=            '<p>'+element.authors+'</p>'
            toAdd +=    '</div>'
            toAdd +=  '<div style="width: 60px; padding: 15px;"><span class="material-symbols-outlined" style="font-size: 30px;">construction</span></div></div>'
        }
    });

    console.log(toAdd)

    document.getElementById("publications").innerHTML = toAdd;

    /*
    <div class="mdl-cell mdl-cell--12-col" style="display: flex; align-items: center; border-bottom: 1px solid;">
                    <div class="mdl-cell mdl-cell--11-col" style="flex: 1">
                        <a class="link_paper" href="https://doi.org/10.1257/pandp.20231017"><h5>The Mental Health of Caregivers and Young Children in Conflict-Affected Settings</h5></a>
                        <p>with <i>Jorge Cuartas</i> and <i>Andrés Moya</i>, 2023.<br>
                        <b>AEA Papers and Proceedings</b>, Volume 113, Pages 336-41</p>
                        <p>We analyze the effects of conflict-related violence on the mental health of caregivers and young children, as well as the role of caregivers' mental health in explaining the toll of conflict on early childhood mental health... <i class="rm">Read more</i></p>
                    </div>
                    <a href="https://doi.org/10.1257/pandp.20231017"><div style="width: 60px; padding: 15px;">
                        <span class="material-symbols-outlined" style="font-size: 30px;">
                            link
                        </span>
                    </div></a>
                </div>
    */
}
