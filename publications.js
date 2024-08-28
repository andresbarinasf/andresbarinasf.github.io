const publications = [
    {
        "id": 1,
        "type": "publication",
        "title": "Why should my group trust yours? Collective trust and trustworthiness under Economic Shocks",
        "link": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4913116",
        "authors": "<i>Barinas-Forero, A.</i> (2024)",
        "journal": "<b>Document CEDE</b>, 29, 1-81",
        "short_abstract": "While trust remains pivotal for economic growth in any society, its consistency over time is not guaranteed. External shocks such as economic crises or natural disasters can disrupt group trust dynamics. Through a laboratory experiment, this study",
        "abstract": "While trust remains pivotal for economic growth in any society, its consistency over time is not guaranteed. External shocks such as economic crises or natural disasters can disrupt group trust dynamics. Through a laboratory experiment, this study examines the effects of random negative economic shocks on economic relations characterized by having a group of trustors and a group of trustees. The results indicate that such shocks decrease collective trust between groups due to two main factors: firstly, a decline in the trustor’s perceived trustworthiness of trustees; and secondly, a tendency for trustors to rely on the contributions of other trustors, leading to free-riding behavior. Furthermore, the experiment reveals that groups become less trustworthy following the shock, as trustees prioritize recovering economic gains from trust relations. This decline in collective trustworthiness is driven by diminished trustee’s beliefs in the trustworthiness of other trustees and trustees’ enforcing what they consider socially appropriate to do: return less after the shock. "
    },
    {
        "id": 2,
        "title": "Is it Time for a Minister Change? Cabinet Survival in Colombia 1958-2018",
        "type": "publication",
        "link": "https://revistas.urosario.edu.co/index.php/desafios/article/view/8524",
        "authors": "Mejía-Guinand, L., <i>Barinas-Forero, A.</i>, Mora, M. (2021)",
        "journal": "<b>Desafios</b>, 33(2): 1-30",
        "short_abstract": "This paper analyzes the formation and survival of  presidential cabinets in Colombia between 1958 and 2018. We compare two periods in the country's political",
        "abstract": "This paper analyzes the formation and survival of  presidential cabinets in Colombia between 1958 and 2018. We compare two periods in the country's political history: During the first period, 1958 to 1990, Colombia operated with a two-party system. The second period, 1991 to the present, is characterized by the opening of the political regime to new parties and the formation of coalition governments. For this purpose, we use semi-parametric models and Cox regressions that allow us to estimate the survival of 581 ministerial appointments and identify the predictors of survival in their positions from both individual characteristics of the ministers and the institutional characteristics of the system. The study shows that the stability in the position of  ministers during the bipartisan era is lower than the duration of  ministers during the period of  coalition governments."
    },
    {
        "id": 3,
        "type": "work_in_progress",
        "title": "Corruption and Political Accountability under Economic Booms: An Experimental Approach",
        "authors": "<i>Barinas-Forero, A.</i> and Scartascini, C."
    },
    {
        "id": 4,
        "type": "work_in_progress",
        "title": "Skills and Stereotypes in Transitioning to the Labor Market through Internships: A Choice Experiment",
        "authors": "<i>Barinas-Forero, A.</i>, Cárdenas, JC., Fergusson, L."
    },
    {
        "id": 5,
        "type": "work_in_progress",
        "authors": "<i>Barinas-Forero, A.</i>, Blanco, M., López-Luzuriaga, A., Scartascini, C.",
        "title": "Understanding Taxpayer Behavior: An Experimental Study of Timing and Gradual Tax Reform."
    },
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
}
