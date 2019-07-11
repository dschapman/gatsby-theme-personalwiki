/** @jsx jsx */
import {React, useState} from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import {Styled,jsx} from 'theme-ui'


function Canon(props) {
    const Container = styled.div(
        `
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 1rem;
        `
    )
    const [sort, setSort] = useState()
    let list = props.data.allCanon.edges
    console.log({list})
    const SelectSort = () => {
        return (


            <form>
                <label sx={{pr: 3,}}>Sort By:</label>
                <select onChange={e => {setSort(e.target.value)}} value={sort}>
                    <option value="none">-- Select --</option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="medium">Medium</option>
                </select>
                
            </form>

        )
    }

    switch(sort) {
        case "title":
            list = list.sort((a,b) => SortTitle(a,b));
                break;
        case "medium":
            list = list.sort((a,b) => SortMedium(a,b));
            break;
        case "author":
            list = list.sort((a,b) => SortAuthor(a,b));
            break;
        case "default":
            break;
        }

    
    return(
       <div className="Canon">
            <Styled.h2>Personal Canon</Styled.h2>
            <p>These are the things that influence how I think and work.
                The giants whose shoulders I clamber onto. 
                The melodies I don't ever want to stop humming.
            </p>
            <SelectSort />
            <Container>
                {list.map(({node}, index) => 
                    <CanonItem 
                    key={node.id}
                    title={node.title}
                    medium={node.medium} 
                    text={node.text}
                    link={node.link}
                    author={node.author}
                    />
                )}
            </Container>
            <p>This page was inspired by <a href="https://www.brendanschlagel.com/2017/11/05/canonize-creating-personal-canon-template/">this blog post</a> by Brendan Schlagel. 
                    I borrowed heavily from <a href="https://github.com/bschlagel/canonize/blob/master/webpage/style-light.css">his source code</a> in creating this page.
            </p>
            </div>
        

    )
}

function CanonItem(props) {
    const {medium, title, text, category, link,author} = props
    let icon
    switch(medium){
        case "book":
            icon="📖";
            break;
        case "song":
            icon="🎵";
            break;
        case "movie":
            icon="🎥";
            break;
        case "tv":
            icon="📺";
            break;
        default:
            icon="⁉️";
            break;
    }

    const Item = styled.div(
        `
        display: block;
        float: left;
        text-align: left;
        box-sizing: border-box;
        margin: 0 3% 10px 0;
        overflow: hidden;
        position: relative;
        border-radius: 5px;
        transition: all .25s;
        width: 30%;
        min-width: 300px;
        min-height:300px;
        padding-top:1rem;
        border: solid 3px; 
        `
    )


    const Icon = styled.div(
        `
        font-size:2em;
        text-align: center;
        `
    )
    
    const Title = styled.h3(
        `
        text-align: center;
        margin-bottom:1rem;
        `
    )

    const Author = styled.h4(
        `
        text-align: center;
        margin-bottom: 0;
        `
    )

    const Description = styled.p(
        `
        padding: 15px 20px;
        text-align: center;
        `
    )

    const ItemLink = styled.a(
        `
        text-decoration:none;
        &:hover {
            text-decoration:none;
            opacity: .8;
            -webkit-transition: all -webkit-transform .25s;
            transition: all .25s;
        };
        `
    )

    return(
        <Item sx={{borderColor:"background",'&:hover':{borderColor: "primary",}}}>
            <ItemLink sx={{color: "text", }} href={link}>
                <Icon>{icon}</Icon>
                <Title>{title}</Title>
                <Author>{author}</Author>
                <Description>{text}</Description>
            </ItemLink>
        </Item>
    )
}

function SortTitle (a,b){
    let titleA = a.node.title.toUpperCase(); // ignore upper and lowercase
    let titleB = b.node.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < titleB) {
    return -1;
    }
    if (titleA > titleB) {
    return 1;
    }

    // names must be equal
    return 0;
}

function SortAuthor (a,b){
    let authorA = a.node.author.toUpperCase(); // ignore upper and lowercase
    let authorB = b.node.author.toUpperCase(); // ignore upper and lowercase
    if (authorA < authorB) {
    return -1;
    }
    if (authorA > authorB) {
    return 1;
    }

    // names must be equal
    return 0;
}

function SortMedium (a,b){
    let A = a.node.medium.toUpperCase(); // ignore upper and lowercase
    let B = b.node.medium.toUpperCase(); // ignore upper and lowercase
    if (A < B) {
    return -1;
    }
    if (A > B) {
    return 1;
    }

    // names must be equal
    return 0;
}

const CanonLayout = ({data}) => {

    return(
        <Layout>
            <Canon data={data} />
        </Layout>
    )
}

export default CanonLayout

export const pageQuery = graphql`
  query canonItems {
    allCanon {
      edges {
        node {
          id
          text
          medium
          link
          title
          author
        }
      }
    }
  }`
