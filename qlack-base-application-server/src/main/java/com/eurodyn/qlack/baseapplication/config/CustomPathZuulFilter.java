package com.eurodyn.qlack.baseapplication.config;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import lombok.SneakyThrows;
import org.springframework.cloud.netflix.zuul.filters.pre.PreDecorationFilter;
import org.springframework.stereotype.Component;

import java.net.URL;

import static org.springframework.cloud.netflix.zuul.filters.support.FilterConstants.REQUEST_URI_KEY;

@Component
public class CustomPathZuulFilter extends ZuulFilter {
    @Override
    public String filterType() {
        return "route";
    }

    @Override
    public int filterOrder() {
        return PreDecorationFilter.FILTER_ORDER + 1;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @SneakyThrows
    @Override
    public Object run() {
//        RequestContext context = RequestContext.getCurrentContext();
//        Object originalRequestPath = context.get(REQUEST_URI_KEY);
//        if (originalRequestPath.toString().contains("upload")) {
//            context.setRouteHost(new URL("http://127.0.0.1:8081/api/secured/file/upload"));
//            context.put(REQUEST_URI_KEY, "");
//        }
//        else if (context.getRouteHost().toString().endsWith("/xforms-server/")) {
//            if ("POST".equalsIgnoreCase(context.getRequest().getMethod())) {
//                System.out.println(context.getRequest().getReader().lines().collect(Collectors.joining(System.lineSeparator())));
////                System.out.println(context.getRequest().getParameter("content"));
//                context.setRouteHost(new URL("http://127.0.0.1:8081/api/secured/file/heartbeat"));
//                context.put(REQUEST_URI_KEY, "");
//            }
//        }
        return null;
    }

}