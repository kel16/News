using NewsPortal.Data.Models;
using System;
using System.Collections.Generic;

namespace NewsPortal.Data
{
    public class DataSeeder
    {
        public static void InitNews(DataContext context)
        {
            #region News
            List<News> news = new List<News>()
            {
                new News { Title = "What would the world do without GPS?", 
                    Annotation = "Satellite navigation systems keep our world running in ways many people barely realise, but they are also increasingly vulnerable. What could we use instead?", 
                    Text = "When satellite navigation was jammed at Israel’s Ben Gurion airport last year, only the skill of the air traffic controllers prevented serious accidents. The jamming was apparently accidental, originating with  Russian forces fighting in Syria, but it highlighted just how dangerous interruptions to the global positioning system – better known as GPS – can be. The construction industry uses GPS when surveying and fishermen use it to comply with strict regulations, But GPS is not only about identifying locations, it is also about time. The constellation of 30 satellites held in orbit around the Earth all use multiple, extremely precise atomic clocks to synchronise their signals. They allow users to determine the time to within 100 billionths of a second. Mobile phone networks all use GPS time to synchronise their base stations, while financial and banking institutions rely upon it to ensure trades and transfers occur correctly."
                },
                new News { Title = "The surprising downsides of empathy",
                    Annotation = "There’s a dark side to feeling the emotions of other people. In some cases, it can even lead to cruelty, aggression, and distress.",
                    Text = "The word empathy comes from the German word “Einfühlung”, coined in the late 1800s, which might broadly translate as “feeling into”. But as psychologist Judith Hall of Northeastern University wrote in Scientific American last month, “empathy is a fundamentally squishy term”. Some see it as the ability to read their fellow human beings, or simply feeling connected to people, while others see it as more of a moral stance about showing concern for others. Even researchers disagree when they are studying it."
                },
                new News { Title = "How a brilliant biologist was failed by science",
                    Annotation = "Roger Arliner Young’s brilliance made her the first black woman in the US to hold a doctorate in zoology. But her academic promise was failed by a system too rooted in prejudice to accept her as an equal.",
                    Text = "In the early 20th Century, less than 50 years after the end of slavery, it was indeed remarkable that a black woman was able to accomplish such heights. White women in the United States were enrolling in higher education and entering the sciences in unprecedented numbers. But black women continued to be denied such access and opportunity, trailing the entry of white women in the sciences by about 60 years. In her survey of black women science PhDs, historian Wini Warren found that between 1876 and 1969, about 650 black people received doctorates in the natural sciences; only 58 doctorates were held by black women.\nYoung would become one of them in 1940 – and the first in zoology."
                },
                new News { Title = "The return of Europe’s largest beasts",
                    Annotation = "Bison and wolf populations are reviving in parts of Europe, in an effort to return some of the landscape to wilderness – but these large beasts are not always welcome.",
                    Text = "Just the other side of the border there are 13 free-living bison herds and a number of elk. In 2017, one wild male bison crossed into Germany and was immediately shot dead by panicked authorities. Young elk also regularly wander into Germany, and are starting to do so more regularly. “It’s only a matter of time before more come,” says Schwill. “And so, we need to prepare the local people.”"
                },
                new News { Title = "The ancient trade holding back the Sahara Desert",
                    Annotation = "For millennia, the gum of the acacia tree has been prized for its unusual culinary and medical uses. Now, the trees are part of a continent-wide effort to hold back the Sahara Desert.",
                    Text = "IIn the Malian bush, a scattering of acacia trees grow through the wild grass and shrubs that spread for miles across the semi-arid scrub. Herders graze cattle nearby and local people fetch firewood. The acacias are among the taller and faster-growing trees of this habitat, with old individuals reaching high above the surrounding scrub."
                },
            };
            #endregion
            context.AddRange(news);
            context.SaveChanges();
        }
    }
}
